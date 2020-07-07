import React, {useState, useEffect} from 'react';
import copyClip from 'copy-to-clipboard'

import ShortnerAPI from '../../pages/api/shortner'

import Button from '../Button'

import * as S from './styles';

const Shortner = () => {
  const [copy, setCopy] = useState(0);
  const [url, setUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [shortnedUrls, setShortnedUrls] = useState([]);

  const shortUrl = async url => {
    try {
      const result = await ShortnerAPI.shortUrl(url);
      console.log(JSON.parse(result))
    } catch (error) {
      console.log(error);
    }
  }

  const getDetails = async hashid => {
    try {
      const result = await ShortnerAPI.getDetails(hashid);
      console.log(result)
    } catch (error) {
      console.log(error);
    }
  }

  const handleShortner = () => {
    if(url.length > 0){
      if (url.match(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)){
        setErrorMessage('');
        // const urls = localStorage.getItem('shortnedUrls');
        // if(urls !== null){
          // localStorage.setItem('shortnedUrls', urls + ';' + url)
        // } else {
          // localStorage.setItem('shortnedUrls', url)
        // }
        console.log(url);
      } else {
        setErrorMessage('Please add a valid link');
      }
    } else {
      setErrorMessage('Please add a link');
      // localStorage.removeItem('shortnedUrls');
    }
  }

  const handleCopy = (id, link) => {
    setCopy(id);
    copyClip(link);
  }

  return (
    <>
      <S.Container>
        <S.InputContainer>
          <S.Input type="url" placeholder="Shorten a link here..." error={errorMessage.length > 0} onChange={(event) => setUrl(event.target.value)} />
          {
            errorMessage.length > 0 &&
            <S.ErrorMessage>
              {
                errorMessage
              }
            </S.ErrorMessage>
          }
        </S.InputContainer>
        <S.Button>
          <Button text="Shorten It!" size="big" onPress={() => handleShortner()} />
        </S.Button>
      </S.Container>
      <S.Shortned>

        <S.ShortnedLink>
          <S.Title>https://google.com</S.Title>
          <S.ShortItem>
            <S.Link>https://cutt.ly/Hj2n42</S.Link>
            <S.CopyButton>
              <Button text={copy === 1 ? "Copied!" : 'Copy'} onPress={() => handleCopy(1, 'https://cutt.ly/Hj2n42')}/>
            </S.CopyButton>
          </S.ShortItem>
        </S.ShortnedLink>
        
      </S.Shortned>
    </>
  );
}

export default Shortner;