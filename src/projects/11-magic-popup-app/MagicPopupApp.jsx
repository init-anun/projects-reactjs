import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import Popup from '../components/Popup'

export default function MagicPopupApp() {

    const [trigger, setTrigger] = useState(false);
    const [timeTrigger, setTimeTrigger] = useState(false);

    const triggerPopup = () => {
        setTrigger(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setTimeTrigger(true);
        }, 3000)
    }, []);

    return (
        <div className='container text-center'>
            <Title text={'Magic Popup APP'} />
            <Title
                text={'click for popup or wait for 3 seconds'}
                classes={'subtitle'} />
            <Button
                text={'Click me'}
                btnClass={'btn-primary'}
                onClick={triggerPopup} />
            {/* {(trigger || timeTrigger) && */}
            {trigger &&
                <Popup
                    type={'alert-info'}
                    title={'Triggered PopUP :)'}
                    text={'This popup was triggered by button'}
                    handleClose={setTrigger}
                    trigger={trigger} />
            }
            {/* } */}
            {!trigger && <Popup
                type={'alert-danger'}
                title={'3s Time triggered PopUP :)'}
                text={'This popup was triggered by a timer'}
                handleClose={setTimeTrigger}
                trigger={timeTrigger} />}
        </div>
    )
}