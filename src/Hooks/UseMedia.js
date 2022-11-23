import React from 'react'

const UseMedia = (media) => {

  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const {matches} = window.matchMedia(media);
      setMatch(matches);
    }
    //assim q carrega a pagina, ja ativa a funcao
    changeMatch();
    // ocorre td vez q o tamanho da tela muda
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    }
  }, [media]);

  return match;
};

export default UseMedia;