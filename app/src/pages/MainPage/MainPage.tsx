import * as css from './style.module.scss'
export const MainPage = () => {
    const hobbies = ['playing football', 'reading books', 'walking down the street']
    return (
        <>
        
        <header>Я Хедер!</header>
        <div className={css.mainInformation}>
            <h1>Hello,  my name is Maxim!</h1>
            <p>My hobbies are</p>
            <ol>
                {hobbies.map(el=>{
                    return (
                        <li>{el}</li>
                    )
                })}
            </ol>
            <p>Of course I love dogs. Here is a photo of a pretty dog.</p>
            <img src='https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg' alt='photo of dog'/>
        </div>
        <footer>Здесь расположена контактная информация</footer>
        </>
    );
};
