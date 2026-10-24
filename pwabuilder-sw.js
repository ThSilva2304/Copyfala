    <!-- Cole isto pouco antes de fechar o corpo da página (</body>) -->
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('./pwabuilder-sw.js')
            .then(reg => console.log('Service Worker registado com sucesso!', reg))
            .catch(err => console.log('Falha ao registar o Service Worker:', err));
        });
      }
    </script>
  </body>
</html>
