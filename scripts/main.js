
/**
 * Sets the theme for the website by updating the class on the <html> element.
 *
 * @param {string} theme - The name of the theme to apply. Possible values include "default", "dark", "sepia", etc.
 */
function setTheme( theme ) {
    document.documentElement.className = ""; // Clear any existing theme class
    if ( theme !== "default" ) {
      document.documentElement.classList.add( `${theme}-theme` );
    }
    localStorage.setItem( "theme", theme ); // Save the user's choice
}

/**
 * Waits for the entire HTML document to be fully loaded
 * before running the code
 */
document.addEventListener( "DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem( "theme" );
    if ( savedTheme && savedTheme !== "default" ) {
      setTheme( savedTheme );
    }
} );