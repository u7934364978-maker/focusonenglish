# Audio Generation Scripts

## Overview

Scripts to generate missing audio files for the B2 FCE course using ElevenLabs API.

## Files

- **analyze-missing-audio.js**: Identifies which audio files are referenced but missing
- **extract-transcripts.js**: Extracts text content for each missing audio file
- **generate-all-audio.js**: Batch generates all missing audio files using ElevenLabs

## Usage

### 1. Get your ElevenLabs API Key

Sign up at https://elevenlabs.io and get your API key from the dashboard.

### 2. Run the batch generation

```bash
node scripts/generate-all-audio.js YOUR_ELEVENLABS_API_KEY
```

### 3. (Optional) Resume from specific index

If the process is interrupted, you can resume from a specific file:

```bash
node scripts/generate-all-audio.js YOUR_API_KEY 25
```

This will start from file #25 instead of #0.

## What will be generated

**Total files**: 63
- **8 listening exercises** (interviews, debates) - ~1,000-3,000 chars each
- **6 pronunciation sentences** - ~50-100 chars each  
- **49 vocabulary words** - ~10-30 chars each

**Estimated API usage**: ~20,000 characters total

## Voice Settings

- **Voice**: Rachel (21m00Tcm4TlvDq8ikWAM) - Professional female voice
- **Model**: eleven_turbo_v2_5 (optimized for speed)
- **Stability**: 0.5
- **Similarity Boost**: 0.75
- **Speed**: 1.0 (normal)

## Rate Limiting

The script includes a 2-second delay between requests to avoid rate limits.

**Free tier limits**:
- 10,000 characters/month
- ~10 requests/minute (recommended)

If you hit rate limits, you can:
1. Wait and resume using the START_INDEX parameter
2. Upgrade to a paid plan
3. Split generation across multiple days

## Output

Generated audio files are saved to:
- `/public/audio/*.mp3` - Main audio files
- `/public/audio/pronunciation/*.mp3` - Pronunciation exercises

Results are logged to `generation-results.json`.
