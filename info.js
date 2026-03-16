/**
 * ECHODUPE CORE DATA
 */
const EchoData = {
    // Versions for HUD
    versions: [
        { label: 'Shop Build', v: 'v2.0.0' },
        { label: 'Game Build', v: 'v1.2.1' },
        { label: 'About Build', v: 'v1.0.6' }
    ],

    // Public Links & Info
    discord: "https://discord.gg/aH2SyywD2x",
    serverIP: "play.echodupels.minehut.gg",
    hub: "https://echodupe.pages.dev", // Updated to Cloudflare
    games: "https://echodupe.github.io/Games/",
    staff: "https://echodupe.pages.dev/staff", // Updated to Cloudflare
    rules: "https://echodupe.pages.dev/rules"  // Updated to Cloudflare
};

// 1. GENERATE VERSION HUD
const versionHUD = document.createElement('div');
versionHUD.style.cssText = `
    position: fixed; bottom: 20px; right: 20px;
    background: rgba(5, 5, 5, 0.85); backdrop-filter: blur(12px);
    border: 1px solid rgba(6, 182, 212, 0.2); padding: 16px;
    border-radius: 14px; z-index: 9999; font-family: 'Inter', sans-serif;
    pointer-events: none; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    border-bottom: 2px solid #06b6d4;
`;

versionHUD.innerHTML = EchoData.versions.map(item => `
    <div style="display: flex; justify-content: space-between; gap: 30px; margin-bottom: 6px; align-items: center;">
        <span style="color: #666; font-size: 9px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px;">${item.label}</span>
        <span style="color: #06b6d4; font-size: 10px; font-weight: 900; font-family: monospace;">${item.v}</span>
    </div>
`).join('') + `
    <div style="margin-top: 10px; border-top: 1px solid rgba(6, 182, 212, 0.1); padding-top: 6px; display: flex; align-items: center; gap: 6px;">
        <div style="width: 4px; height: 4px; background: #06b6d4; border-radius: 50%; box-shadow: 0 0 5px #06b6d4;"></div>
        <span style="color: #444; font-size: 8px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px;">System_Live</span>
    </div>
`;
document.body.appendChild(versionHUD);

// 2. AUTO-FILL HTML & COPY FEATURE
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-link]').forEach(el => {
        const key = el.getAttribute('data-link');
        if (EchoData[key]) el.href = EchoData[key];
    });

    document.querySelectorAll('[data-text]').forEach(el => {
        const key = el.getAttribute('data-text');
        if (EchoData[key]) el.innerText = EchoData[key];
    });

    const copyTarget = document.querySelector('[data-copy="serverIP"]');
    if (copyTarget) {
        copyTarget.addEventListener('click', () => {
            navigator.clipboard.writeText(EchoData.serverIP).then(() => {
                const originalText = copyTarget.innerText;
                copyTarget.innerText = "COPIED!";
                copyTarget.style.color = "#06b6d4";
                setTimeout(() => {
                    copyTarget.innerText = originalText;
                    copyTarget.style.color = "";
                }, 2000);
            });
        });
    }
});