import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Montserrat", sans-serif;
    }

    :root{
        --primary-color: #222260;
        --primary-color2: 'color: rgba(34, 34, 96, .6)';
        --primary-color3: 'color: rgba(34, 34, 96, .4)';
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
        


    body{
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: rgba(34, 34, 96, .6);
    }

    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color);
    }

    .flex{
        display: flex;
        align-items: center;
        height:100%;  //gotten
        justify-content:center;
        text-align:center;
    }

    .grid{
        display: grid;
        align-items: center;
        gap: 1.5rem;
    }

    html{
        font-size:90%;
    }

    a{
        text-decoration: none;
    }

    li{
        text-style: none;
    }

    icons{
        font-size: var(--h2FontSize);
    }

    img, video{
        height: auto;
        width: 100%;
    }

    .message{
        display: none;
    }

    .showMessage{
        display: block;
        color: var(--whiteColor);
        background: rgb(255,0,0);
        border
    }

    .error{
        color: red;
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
`;