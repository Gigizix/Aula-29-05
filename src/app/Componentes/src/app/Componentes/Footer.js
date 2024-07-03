import Styles from "./footer.module.css";
import Image from "next/image";

export default function Footer(){
    return(
        <footer className={Styles.footer}>
            <nav> 
                <Image
                     width={40}
                     height={40}
                     src= "https://icon-library.com/images/whatsapp-png-icon/whatsapp-png-icon-0.jpg"
                />
                 
                 <Image
                     width={40}
                     height={40}
                     src= "https://icon-icons.com/icons2/933/PNG/512/twitter-logo-on-black-background_icon-icons.com_72503.png"
                />

                 <Image
                     width={40}
                     height={40}
                     src= "https://www.pngkey.com/png/full/1-13374_instagram-icon-new-black-background-vector-logo-instagram.png"
                />

                 <Image
                     width={40}
                     height={40}
                     src= "https://www.pngfind.com/pngs/m/10-103038_png-file-facebook-logo-branco-png-transparent-png.png"
                />

                 <Image
                     width={40}
                     height={40}
                    src= "https://www.pngall.com/wp-content/uploads/13/Louis-Vuitton-Logo.png"
                />
            </nav>
        </footer>
    )
}