// Initialize TinyMCE
tinymce.init({
  // Other TinyMCE configuration options
  setup: function (editor) {
    // Add a callback to handle the ACF Wysiwyg field after TinyMCE is initialized
    editor.on('init', function () {
      // Code to handle the ACF Wysiwyg field
      // For example, you can use jQuery to find the ACF Wysiwyg field and make any necessary modifications
      // Example:
      // jQuery('#acf-wysiwyg-field').addClass('custom-class');
    });
  }
});
