# Aicono - AI intelligent desktop icon autopilot

Aicono organizes a cluttered Windows desktop automatically by grouping icons with AI and arranging them into a neat, overlap-free layout with a live visual preview. It runs portable with sane defaults out of the box, and can operate fully offline via manual JSON configuration when AI services are unavailable.

### Key features
- Zero AI knowledge required: download, extract, run; default settings deliver instant grouping and layout on Windows 10/11 64‑bit.

- Scales via JSON: all important settings are editable in llmconfig.json and icon grouping cache icon_groups_cache.json, with manual grouping supported by editing the provided JSON structure.

- Local LLM backends: supports Llama.cpp‑style OpenAI API, Ollama, and a custom/legacy endpoint; switch models, prompts, and options through llmconfig.json.

- WYSIWYG layout editor: select the desktop region, preview placement, and adjust spacing, gaps, and overlap handling with a self‑explaining visual editor.

- Smart layout engine: place icons neatly without overlaps and respects a user‑defined working area.

- Portable by design: no installation, no registry writes, and no system files touched, keeping the footprint minimal.

- Works offline: manual mode groups icons via a simple JSON file when LLM services are not available.

- Fast and repeatable: optional caching accelerates repeated scans and preserves prior groupings.

### Quick start
- Download the portable archive, extract anywhere, and run Aicono.exe.

- Optional: open “LLM Config” to pick Llama/Ollama/custom and “Icon Config” to tweak or manually edit icon_groups_cache.json.


### Installation & Setup

Website: http://tetramatrix.github.io/Aicono


# Downloads:
- Latest version: Aicono-v1.0.0.zip
- MD5 Checksum (.exe): bf1f3c02f298d81f8bbd6e0232755acf
- Download: http://tetramatrix.github.io/Aicono



### Support the Development

If you find Aicono useful, please consider donating to support ongoing development!

Bitcoin Cash (BCH):
bitcoincash:qrvhk77ujevd9n7jse4jewm99eg95at7tvc6m9v2vv

PayPal:
paypal.me/Gigamegs

Thank you for your support!






# Desktop Icon Configuration Example

This file shows how to manually create a configuration file for the desktop icon positioning tool when you don't have access to LLM services or want to use the manual version.

## File Structure

The configuration file muse be saved as a JSON file `icon_groups_cache.json` with the following structure:

```json
{
  "names_hash": "your_unique_hash_here",
  "model_name": "manual_configuration",
  "groups": [
    {
      "name": "Group Name 1",
      "items": [
        "Application1.exe",
        "Script1.bat",
        "Tool1"
      ]
    },
    {
      "name": "Group Name 2", 
      "items": [
        "Application2.exe",
        "Tool2",
        "Utility2"
      ]
    }
  ]
  "timestamp": 1726404000.0
}
```

## How to Create Your Own Configuration

### Step 1: List Your Desktop Icons
First, identify all the applications, files, and shortcuts on your desktop that you want to organize.

### Step 2: Create Logical Groups
Organize your icons into logical categories. Common groups might include:
- **Development & Programming**: IDEs, code editors, development servers
- **System Utilities**: System monitoring, file management, system tools
- **Media & Entertainment**: Games, media players, streaming apps
- **Communication**: Chat apps, email clients, video conferencing
- **Productivity**: Office apps, note-taking, project management
- **Web Browsers**: Different browsers and web-related tools
- **Graphics & Design**: Image editors, design tools, CAD software

### Step 3: Fill in the Template

1. **names_hash**: Generate a unique identifier (you can use any string or generate a hash)
2. **model_name**: Set to "manual_configuration" or your preferred identifier
3. **groups**: Create an array of group objects, each with a name and items array
4. **timestamp**: Use current Unix timestamp (or any number for identification)

### Step 4: Example for Common Applications

```json
{
  "names_hash": "manual_desktop_config_v1",
  "model_name": "manual_configuration",
  "groups": [
    {
      "name": "Web Browsers",
      "items": [
        "Google Chrome",
        "Mozilla Firefox",
        "Microsoft Edge"
      ]
    },
    {
      "name": "Development Tools",
      "items": [
        "Visual Studio Code",
        "PyCharm",
        "Git Bash",
        "Docker Desktop"
      ]
    },
    {
      "name": "System Tools",
      "items": [
        "Task Manager",
        "Control Panel",
        "File Explorer",
        "Command Prompt"
      ]
    },
    {
      "name": "Media & Games",
      "items": [
        "VLC Media Player",
        "Steam",
        "Spotify"
      ]
    },
    {
      "name": "Communication",
      "items": [
        "Discord",
        "Telegram",
        "Zoom"
      ]
    }
  ],
  "timestamp": 1726404120.0
}
```

## Important Notes

- **Exact Names**: Make sure the item names in `groups` section match exactly the desktop icons file names
- **File Names**: Use the exact names as they appear on your desktop (including file extensions for .exe, .bat files)
- **Validation**: Double-check that all mappings are correct before using the file

## Tips for Organization

1. **Keep groups balanced**: Try to have 3-8 items per group for optimal desktop layout
2. **Use descriptive names**: Group names should clearly indicate their contents
3. **Consider frequency**: Put frequently used applications in easily accessible groups
4. **Logical grouping**: Group related applications together (e.g., all development tools)

Save this configuration as a `.json` file and use it with your desktop icon positioning tool.


### Discover our RyzenZPilot! 

# RyzenZPilot - AMD Ryzen Power Management Tool

RyzenZPilot is a powerful tool for managing AMD Ryzen processor power settings on Windows.
It allows users to adjust CPU performance, power limits, and thermal configurations
for optimal performance and efficiency.

Website: http://tetramatrix.github.io/RyzenZPilot

Community: Join discussions on Reddit at /r/RyzenZPilot

### Downloads:
- Latest version: RyzenZPilot-v3.1.1.zip
- MD5 Checksum: 5a7c65888c4ebfbfb7ba8c22a491c55f
- Download: http://tetramatrix.github.io/RyzenZPilot

### Support the Development
If you find RyzenZPilot useful, please consider donating to support ongoing development!

Bitcoin Cash (BCH):
bitcoincash:qrvhk77ujevd9n7jse4jewm99eg95at7tvc6m9v2vv

PayPal:
paypal.me/Gigamegs

Thank you for your support!