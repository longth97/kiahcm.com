
import { useRouter } from "next/router";

type PrimaryButton = {
    text : string,
    href ?: string,
    functionInput ?: Function 
}

export default function PrimaryButton ( props : PrimaryButton ){

    const router = useRouter();

    const handleClick = async ()=>{

        if(props.functionInput){

            await props.functionInput();

            router.push(props.href);

        }else{
            if(props.href){
                
                router.push(props.href);
                
            }
        }
        
    }

    return <span 

            className="primaryButton" 
            onClick={ handleClick } >

            {props.text}

       <style jsx>{`
            .primaryButton{

                position: relative;
                border-radius: 10px;
                cursor: pointer;
                text-transform: uppercase;
                color: #fff;
                background-color: #ed1c24;
                padding : 10px 25px;
                font-size: 1.15vw;
                letter-spacing: .06vw;
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.22);
                top: 0;
                transition : .25s;

                &:after {
                    content: "";
                    position: absolute;
                    width:100%;
                    height:100%;
                    border-radius: 10px;
                    left:0;
                    top: 0;
                    box-shadow: inset 1px 1px 0 0 rgba(255,255,255,0.1), inset 0 2em 15px 0 rgba(255,255,255,0.2);
                }
                
            }
            .primaryButton:hover{
                top: -5px;
                box-shadow: 0px 30px 40px 0px rgba(0,0,0,0.2);
            }
       `}</style>

    </span>
}