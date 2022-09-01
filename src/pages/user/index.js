import { UserContainer, UserBox, BoxTitle, BoxContent, BoxContent2, UserButton } from "./style"
import { ReactComponent as Check } from "../../assets/svg/check.svg";
import { useState } from "react";
import { ReactComponent as More } from "../../assets/svg/more.svg";
import { ReactComponent as Less } from "../../assets/svg/less.svg";


const PageUser = ()=>{
    const [hide, setHide] = useState({
        box1: false,
        box2:false
    })

    return(
        <UserContainer>
            <h1 className="page-title">Utilizador</h1>
            
            <UserBox>
                <BoxTitle hide={hide.box1}>
                    <h2 className="box-title">Tipo de Utilizador</h2>
                    <Less onClick={()=>setHide({...hide, box1:!hide.box1})} className="show-less"/>
                    <More
                    onClick={()=>setHide({...hide, box1:!hide.box1})} 
                    className="show-more"/>
                </BoxTitle>

                <BoxContent hide={hide.box1}>
                    <div className="checkfield">
                        <input 
                        id="project-manager"
                        className="checkfield__input" type="checkbox"/>
                        <label htmlFor="project-manager" class="checkfield__svg">
                            <Check/>
                        </label>
                        <label htmlFor="project-manager" className="checkfield__box"/>
                        <label className="checkfield__label" htmlFor="project-manager"> Project Manager </label>
                    </div>

                    <div className="checkfield">
                        <input
                        id="developer" className="checkfield__input" type="checkbox"/>
                        <label htmlFor="developer" class="checkfield__svg">
                            <Check/>
                        </label>
                        <label htmlFor="developer" className="checkfield__box"/>
                        <label className="checkfield__label" htmlFor="developer"> Developer </label>
                    </div>

                    <div className="checkfield">
                        <input
                        id="architect" className="checkfield__input" type="checkbox"/>
                        <label htmlFor="architect" class="checkfield__svg">
                            <Check/>
                        </label>
                        <label htmlFor="architect" className="checkfield__box"/>
                        <label className="checkfield__label" htmlFor="architect"> Architect </label>
                    </div>
                </BoxContent>
            </UserBox>

            <UserBox>
                <BoxTitle hide={hide.box2}>
                    <h2 className="box-title">Contacto</h2>
                    <Less onClick={()=>setHide({...hide, box2:!hide.box2})} className="show-less"/>
                    <More
                    onClick={()=>setHide({...hide, box2:!hide.box2})} 
                    className="show-more"/>
                </BoxTitle>

                <BoxContent2 hide={hide.box2}>
                    <div className="textfield">
                        <label 
                        className="textfield__label"
                        htmlFor="email"> Email </label>
                        <input
                         id="email"
                         className="textfield__input" type="email"/>
                    </div>

                    <div className="textfield">
                        <label 
                        className="textfield__label"
                        htmlFor="password"> Palavra-passe </label>
                        <input 
                        id="password"
                        className="textfield__input" 
                        type="password"/>
                    </div>

                    <div className="textfield">
                        <label 
                        className="textfield__label"
                        htmlFor="phone"> Telefone </label>
                        <input 
                        id="phone"
                        className="textfield__input" type="phone"
                        defaultValue="+351"
                        />
                    </div>
                </BoxContent2>
            </UserBox>

            <UserButton>
                <button className="cancel">Cancelar</button>
                <button className="save">Guardar</button>
            </UserButton>
        </UserContainer>
    )
}

export default PageUser;