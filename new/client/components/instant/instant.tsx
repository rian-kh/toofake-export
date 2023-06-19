import Instance from "@/models/instance";

import s from './instant.module.scss';
import Draggable from "react-draggable";
import { useState } from "react";

interface _Instant {
    instance: Instance;
}

export default function Instant({ instance }: _Instant) {

    let [swap, setSwap] = useState<boolean>(false);

    console.log(instance);
    return (
        <div className={s.instant}>

            <div className={s.top}>
                <div className={s.pfp}>
                    <img src={""} />
                </div>
                <div className={s.details}>
                    <div className={s.username}> @{instance.username} </div>
                    <div className={s.location}> {"-0 +0"} </div>
                </div> 
            </div>

            <div className={s.content}>
                <img src={swap ? instance.primary : instance.secondary} className={s.primary}/>
                <div className={s.bounds}>
                    <Draggable axis="both" bounds="parent">
                        <img src={swap ? instance.secondary : instance.primary} className={s.secondary} onClick={() => setSwap(!swap)}/>
                    </Draggable>
                </div>
            </div>

            <div className={s.caption}>
                {instance.caption}
            </div>

            
        </div>



    )
}