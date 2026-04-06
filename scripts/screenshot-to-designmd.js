#!/usr/bin/env node

/**
 * Screenshot to DESIGN.md Generator
 * 
 * Analyzes screenshots using AI vision models and generates
 * DESIGN.md content for uni-app ThorUI projects.
 * 
 * Usage:
 *   node screenshot-to-designmd.js <screenshot-path> [--model=claude|gpt4v]
 * 
 * Requirements:
 *   - For Claude: ANTHROPIC_API_KEY environment variable
 *   - For GPT-4V: OPENAI_API_KEY environment variable
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const MODEL = process.argv.find(arg => arg.startsWith('--model='))?.split('=')[1] || 'claude';

// Design prompt template for uni-app ThorUI
const DESIGN_PROMPT = `You are a design system analyst. Analyze this mobile app screenshot and extract a complete design system in DESIGN.md format for a uni-app project using ThorUI component library.

Focus on extracting:
1. Color palette (brand colors, text colors, background colors, border colors)
2. Typography (font sizes, weights, line heights)
3. Component styles (buttons, cards, inputs, lists, navigation)
4. Spacing system (margins, paddings, gaps)
5. Border radius and shadows
6. Touch/active states

Format your response as a complete DESIGN.md file following the structure:

# Design System: Extracted from Screenshot

## 1. Visual Theme & Atmosphere
## 2. Color Palette & Roles
## 3. Typography Rules
## 4. Component Stylings
## 5. Layout Principles
## 6. Depth & Elevation
## 7. Touch States & Interactions
## 8. Platform Adaptation
## 9. ThorUI Component Mapping
## 10. Agent Prompt Guide

Be specific with HEX color codes, font sizes in rpx, and map all design elements to ThorUI component names.

IMPORTANT:
- All font sizes MUST be in rpx (not px)
- Use ThorUI component naming conventions
- Include all interactive states (default, pressed, disabled)
- Document safe area considerations for mobile
`;

/**
 * Convert image to base64
 */
function imageToBase64(imagePath) {
    const ext = path.extname(imagePath).toLowerCase();
    const mimeTypes = {
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.webp': 'image/webp'
    };
    
    const mime = mimeTypes[ext] || 'image/png';
    const buffer = fs.readFileSync(imagePath);
    return `data:${mime};base64,${buffer.toString('base64')}`;
}

/**
 * Call Claude API for vision analysis
 */
async function analyzeWithClaude(imagePath) {
    const { Anthropic } = require('@anthropic-ai/sdk');
    const anthropic = new Anthropic();
    
    const base64Image = imageToBase64(imagePath);
    
    const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 8192,
        messages: [
            {
                role: 'user',
                content: [
                    {
                        type: 'image',
                        source: {
                            type: 'base64',
                            media_type: 'image/png',
                            data: base64Image.split(',')[1]
                        }
                    },
                    {
                        type: 'text',
                        text: DESIGN_PROMPT
                    }
                ]
            }
        ]
    });
    
    return response.content[0].text;
}

/**
 * Call OpenAI API for vision analysis
 */
async function analyzeWithGPT4V(imagePath) {
    const OpenAI = require('openai');
    const openai = new OpenAI();
    
    const base64Image = imageToBase64(imagePath);
    
    const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
            {
                role: 'user',
                content: [
                    {
                        type: 'image_url',
                        image_url: {
                            url: base64Image
                        }
                    },
                    {
                        type: 'text',
                        text: DESIGN_PROMPT
                    }
                ]
            }
        ],
        max_tokens: 8192
    });
    
    return response.choices[0].message.content;
}

/**
 * Main function
 */
async function main() {
    const screenshotPath = process.argv[2];
    
    if (!screenshotPath) {
        console.error('Usage: node screenshot-to-designmd.js <screenshot-path> [--model=claude|gpt4v]');
        console.error('\nExample:');
        console.error('  node screenshot-to-designmd.js ./screenshot.png');
        console.error('  node screenshot-to-designmd.js ./screenshot.jpg --model=claude');
        console.error('\nEnvironment variables:');
        console.error('  ANTHROPIC_API_KEY - for Claude model');
        console.error('  OPENAI_API_KEY - for GPT-4V model');
        process.exit(1);
    }
    
    if (!fs.existsSync(screenshotPath)) {
        console.error(`Error: File not found: ${screenshotPath}`);
        process.exit(1);
    }
    
    console.log(`Analyzing screenshot: ${screenshotPath}`);
    console.log(`Using model: ${MODEL}`);
    
    try {
        let result;
        
        if (MODEL === 'gpt4v') {
            if (!process.env.OPENAI_API_KEY) {
                console.error('Error: OPENAI_API_KEY environment variable is required for GPT-4V');
                process.exit(1);
            }
            result = await analyzeWithGPT4V(screenshotPath);
        } else {
            if (!process.env.ANTHROPIC_API_KEY) {
                console.error('Error: ANTHROPIC_API_KEY environment variable is required for Claude');
                process.exit(1);
            }
            result = await analyzeWithClaude(screenshotPath);
        }
        
        // Extract markdown content (between ```markdown and ``` if present)
        let content = result;
        const mdMatch = result.match(/```markdown\s*([\s\S]*?)```/);
        if (mdMatch) {
            content = mdMatch[1];
        }
        
        // Output the result
        console.log('\n--- Generated DESIGN.md ---\n');
        console.log(content);
        console.log('\n--- End ---\n');
        
        // Optionally save to file
        const outputPath = process.argv[3] || 'DESIGN.md';
        fs.writeFileSync(outputPath, content);
        console.log(`Saved to: ${outputPath}`);
        
    } catch (error) {
        console.error('Error analyzing screenshot:', error.message);
        process.exit(1);
    }
}

main();
