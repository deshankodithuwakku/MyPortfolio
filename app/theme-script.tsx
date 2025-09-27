export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Define theme detection and application function
            function setTheme(theme) {
              document.documentElement.setAttribute('data-bs-theme', theme);
              document.documentElement.style.visibility = 'visible';
            }
            
            // Try to get stored theme, default to 'dark'
            let currentTheme = 'dark';
            try {
              const storedTheme = localStorage.getItem('theme');
              if (storedTheme) {
                currentTheme = storedTheme;
              }
            } catch (e) {
              // localStorage not available (e.g., in GitHub Pages iframe or private browsing)
              // Use system preference as fallback
              if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                currentTheme = 'light';
              }
            }
            
            // Apply theme immediately
            setTheme(currentTheme);
            
            // Re-apply on DOM ready to ensure it sticks
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', function() {
                setTheme(currentTheme);
              });
            }
          })();
        `,
      }}
    />
  );
}