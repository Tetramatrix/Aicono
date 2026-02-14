# Aicono - AI intelligent desktop icon autopilot

Aicono organizes a cluttered Windows desktop automatically by grouping icons with AI and arranging them into a neat, overlap-free layout with a live visual preview. It runs portable with sane defaults out of the box, and features a full WYSIWYG canvas editor for visual fine-tuning.

### Key features
- Zero AI knowledge required: download, extract, run; default settings deliver grouping and layout on Windows 10/11 64‑bit.

- Full Model Manager: connect to multiple cloud and on-prem LLM backends including OpenAI, Mistral, Ollama, Lemonade, Llamacpp, and other compatible services. The model manager lists all available models and allows users to activate or deactivate models as needed for specific tasks.

- Multi-Service AI Integration: supports connection to both on-prem and cloud-based AI services:
  - On-Prem Services: Ollama, Llamacpp, Lemonade, and other self-hosted LLM solutions
  - Cloud Services: OpenAI, Mistral, and other cloud-based AI platforms
  - Flexible Configuration: switch between different AI backends based on your needs, privacy requirements, and performance considerations

- Full WYSIWYG Canvas Editor: direct manipulation of workspace elements. Drag and drop icons between groups, rearrange groups, rename items, and adjust group boundaries with an intuitive visual interface.

- WYSIWYG layout editor: select the desktop region, preview placement, and adjust grid size with a visual editor.

- Smart layout engine: place icons neatly without overlaps and respects a user‑defined working area.

- Portable by design: no installation, no registry writes, and no system files touched, keeping the footprint minimal.

- Visual fine-tuning: drag & drop icons between groups to reclassify them visually, resize and reposition groups directly on the canvas, and rename groups with real-time preview.

### Quick start
- Download the portable archive, extract anywhere, and run Aicono.exe.

- Optional: open the Model Manager to configure LLM backends and use the visual editor to fine-tune your desktop layout.


### Technical Implementation

#### AI Model Performance
Aicono uses AI models to intelligently group desktop icons based on semantic meaning and logical relationships. The built-in default model is lightweight and works offline, but may not always classify icons perfectly, especially for less common applications. For optimal performance, we recommend using Llama 3.1 8b Instruct or higher models. Processing time depends entirely on the number of desktop icons - fewer icons mean faster processing times. Naturally, the best performance is achieved with paid cloud services.

#### Hardware Requirements
- Built-in Models: Range from 1B parameter (806MB) to 20B parameter (12-16GB)
- Recommended 8B Models (e.g., Llama 3.1 8b Instruct): Minimum 12 GB RAM or 8 GB VRAM for smooth operation
- Hardware Requirements Increase with Model Size: Larger models with more parameters require higher specifications
- Cloud Models: No local hardware requirements (requires internet connection)

#### Alternatives for Limited Hardware
If your system has limited hardware resources, you have two main options:
- Built-in Portable Model: Works fully offline but may classify complex icons as "Miscellaneous"
- Cloud-based LLMs: Connect to services like OpenAI, Mistral, etc. for high accuracy without local hardware costs

#### Model Management
Built-in Models: Range from 1B parameter (806MB) to 20B parameter (17-18GB). The smallest model (~806MB) is downloaded on first run and works fully offline. It is fast, but may sometimes classify complex icons as "Miscellaneous". For significantly better results, we recommend Llama 3.1 8b Instruct or higher models.

AI Integration: Supports connection to both on-prem and cloud-based AI services:
- Built-in Models: Pre-configured models accessible through the model manager.
- On-Prem Services: Lemonade, Llamacpp, Ollama, and other self-hosted LLM solutions
- Cloud Services: OpenAI, Mistral, and other cloud-based AI platforms (paid services provide the best performance)
- Configuration: Switch between different AI backends based on requirements

Note: Larger models can provide better grouping, but require more memory and processing power. Processing time is directly proportional to the number of icons - fewer icons result in faster processing. For the best performance, especially with large desktops, we recommend using paid cloud services.


### 🌐 Installation & Setup

🌐 Website: http://tetramatrix.github.io/Aicono


# 📥 Downloads:
- 🆕 Latest version: Aicono.exe v1.0.6
- 🔢 MD5 Checksum (.exe): 175f645fce9603f7f1f258f06a95482b
- 📥 Download: http://tetramatrix.github.io/Aicono


### 🎨 Visual Fine-Tuning with WYSIWYG Canvas Editor

✨ Aicono now features a full visual editor that allows you to fine-tune your desktop organization with an intuitive drag-and-drop interface. No more manual configuration needed!

- 🖱️ Drag & Drop Icons: Simply drag icons between groups to reclassify them. For example, if the AI placed Steam in Work, just drag it to the Games group.
- 🔄 Resize & Reposition Groups: Adjust the size and position of icon groups directly on the canvas.
- ✏️ Rename Groups: Click on group names to rename them according to your preferences.
- 👀 Visual Feedback: See changes in real-time as you make adjustments to your desktop layout.

💡 The visual editor eliminates the need for manual configuration, making fine-tuning accessible to all users.


### 💰 Support the Development

💝 If you find Aicono useful, please consider donating to support ongoing development!

🪙 Bitcoin Cash (BCH):
bitcoincash:qrvhk77ujevd9n7jse4jewm99eg95at7tvc6m9v2vv

💳 PayPal:
paypal.me/Gigamegs

🙏 Thank you for your support!

☕ Buy us a coffee or support via PayPal or Bitcoin Cash !

🚀 Discover our Spaceship! 🚀

🎮 Retro Arcade 2d side-scroller bullet-hell shmup game: Spaceship

🌐 https://tetramatrix.github.io/spaceship/
🎮 https://www.indiedb.com/games/new-spaceship
🎮 https://tetramatrix.itch.io/old-school-retro-mini-game-spaceship
### 🔍 Discover our other tools!

# 🚀 RyzenZPilot - AMD Ryzen Power Management Tool

⚙️ RyzenZPilot is a powerful tool for managing AMD Ryzen processor power settings on Windows.
It allows users to adjust CPU performance, power limits, and thermal configurations
for optimal performance and efficiency.

🌐 Website: http://tetramatrix.github.io/RyzenZPilot


# 🚀 Sorana - Visual AI Workspace

🧠 Sorana is an AI-powered visual workspace that transforms how you organize and interact with digital files. Using semantic AI analysis, it automatically groups related files and folders onto a spatial 2D canvas, replacing traditional hierarchies with intuitive visual layouts. Build drag-and-drop workspaces and no-code agent pipelines, connect to on-prem or cloud AI backends (OpenAI, Mistral, LLamacpp, Lemonade, Ollama), and keep your data under your control.

🌐 Website: https://tetramatrix.github.io/Sorana/



Changelog: 

📅 February 14, 2026 - Version 1.0.4 - 1.0.6

• Bugfix Model Manager on-prem and cloud model activation

Version 1.0.3
-Bugfix built-in models
-Significant performance enhancement for organizing large Desktop Icons structures using new iterative algorithms

Version: 1.0.2
Headline: Major Update: Mindmap Mode, WYSIWYG Editor, Persistent Sessions & Website Redesign

Changelog:

New Features:

Mindmap Visualization: A new view mode that generates a mindmap-style diagram of your desktop hierarchy, helping users visualize icon relationships and group structures before applying changes.

Full WYSIWYG Canvas Editor: Completely transformed user experience. Users can now drag and drop icons between groups, create new groups, delete unwanted groups, and resize boundaries visually on an interactive canvas.

Multi-Service AI Integration: Added a comprehensive Model Manager that connects to both on-prem services (Ollama, LlamaCpp) and cloud providers (OpenAI, Mistral), allowing users to choose the best model for their privacy and performance needs.

Persistent Sessions: The application now remains open after the initial arrangement, allowing for immediate fine-tuning and adjustments without needing to restart the analysis process.

Improvements:

Website & Documentation Redesign: A completely overhauled website provides clearer onboarding, better documentation for model configuration, and a more modern user experience.

Enhanced Layout Engine: Improved grid algorithm prevents icon overlaps and strictly respects user-defined working areas.

Offline Capability: Includes pre-configured lightweight models for immediate offline use, with options to download larger, more capable models.

Portable Design: Maintained zero-installation footprint; no registry writes or system file modifications.

Fixes:

Resolved the issue where the application would close automatically after a single arrangement pass.

Addressed "hit-or-miss" categorization by adding manual override capabilities via the visual editor.
