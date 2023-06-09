import React, { useState } from "react";
import axios from "axios";



const AddEvent = ({onAdd, event}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [price, setPrice] = useState('')
    const [title, setTitle] = useState('')
    const [venue, setVenue] = useState('')
    const [category, setCategory] = useState('')
    const [img, setImg] = useState('')
    const [promotion, setPromotion] = useState(false)
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const onSubmit = (e) => {
        
        e.preventDefault()
        if(!text){
            alert('Informations manquantes')
            return
        }
        if(img){
            console.log('je suis dedans');
            console.log(img)
            /*let formData = new FormData();
                
            formData.append("img", img);
            fetch(`${img}`, {method: "POST", body: formData});*/
            /*let image = document.querySelector('#fileImg').file;
            axios.post('http://localhost:5000', {
                                                    image
                                                    }, {
                                                        headers: {
                                                        'Content-Type': 'multipart/form-data'
                                                        }
                                                    }
            ).then(res => {
                console.log(res)
              }).catch(err=>{
                console.log(err)
              })*/

        
           /* axios.post(`${img}`, formData)
              .then(res => {
              console.log(res)
            })*/

        }
        onAdd({text, day, title, price, promotion, venue, img, category})
        event({text, day, title, price, promotion, venue, img, category})
        setText('')
        setDay('')
        setTitle('')
        setPrice('')
        setImg('')
        setVenue('')
        setCategory('')
        setPromotion(false)

    }

    function selectFile(e){
        setImg('./upload/' + e.target.files[0].name); 
        setSelectedFile(e.target.files[0]);
    }

    function onClickHandler(e){

        console.log("bouton upload")

        const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			`http://localhost:5000/upload`,
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});

       /* var formData = new FormData();
        var imagefile = document.querySelector('#fileImg');
        console.log(imagefile.files[0]);

        formData.append("img", imagefile.files[0]);
        console.log('>> formData >> ', formData);
        axios.post(`http://localhost:5000/upload`, imagefile.files[0], {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err.response)
        })*/


/*

        const data = new FormData() 
        data.append('file', setImg)
        console.log(img);

        axios.post(img, data, { 
           // receive two    parameter endpoint url ,form data
       }).then(res => { // then print response status
        console.log(res.statusText)
        console.log(res)
     }).catch(err=>{
        console.log(err.responseJSON);
     })*/

    }


    return (
        <form encType="multipart/form-data" className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Artiste</label>
                <input
                type='text'
                placeholder="Nom de l'artiste ou du groupe"
                name='text'
                value={text}
                onChange = {(e) => setText(e.target.value)}
                required
                />
            </div>
            <div className="form-control">
                <label>Titre de l'événement</label>
                <input
                type='text'
                placeholder="Nom de l'événement ou de la tournée"
                value={title}
                onChange = {(e) => setTitle(e.target.value)}
                required
                />
            </div>
            <div className="form-control">
                <label>Prix</label>
                <input
                type='number'
                min='0'
                placeholder="Prix plancher"
                value={price}
                onChange = {(e) => setPrice(e.target.value)}
                required
                />
            </div>
            <div className="form-control">
                <label>Date de l'événement</label>
                <input
                type='date'
                placeholder="Date de l'événement"
                value={day}
                onChange = {(e) => setDay(e.target.value)}
                required
                />
            </div>
            <div className="form-control">
                <label>Lieu de l'événement</label>
                <input
                type='text'
                placeholder="Nom de la salle ou du bâtiment"
                value={venue}
                onChange = {(e) => setVenue(e.target.value)}
                required
                />
            </div>
            <div className="form-control">
                <label>Catégorie</label>
                <select className="form-control" onChange = {(e) => setCategory(e.target.value)} >
                    <option value="" disabled>Choisissez une catégorie</option>
                    <option value={category}>Musique</option>
                    <option value={category}>Danse</option>
                    <option value={category}>Opéra</option>
                    <option value={category}>Théâtre</option>
                    <option value={category}>Conte & Légende</option>
                    <option value={category}>Humour</option>
                </select>
            </div>
            <div className="form-control">
                <label>Choisissez une image</label>
                
                <input
                type='file'
                name='img'
                id='fileImg'
                accept='image/*'
                onChange = {selectFile}
                required
                />
                <button type="button" className="btn btn-success btn-block" onClick={onClickHandler}>Upload</button> 
            </div>
            <div className="form-control form-control-check">
                <label>Promotion</label>
                <input
                type='checkbox'
                checked = {promotion}
                value={promotion}
                onChange = {(e) => setPromotion(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" className="btn btn-block" value="Enregistrer"/>
        </form>
    )
}

export default AddEvent;



/*
import React, { useState } from "react";
import axios from "axios";



const AddEvent = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [price, setPrice] = useState('')
    const [title, setTitle] = useState('')
    const [venue, setVenue] = useState('')
    const [category, setCategory] = useState('')
    const [img, setImg] = useState('')
    const [promotion, setPromotion] = useState(false)
    const [selectedFile, setSelectedFile] = useState();

    const onSubmit = (e) => {
        
        e.preventDefault()
        if(!text){
            alert('Informations manquantes')
            return
        }
    
        onAdd({text, day, title, price, promotion, venue, img, category})
        setText('')
        setDay('')
        setTitle('')
        setPrice('')
        setImg('')
        setVenue('')
        setCategory('')
        setPromotion(false)

    }

    function onChangeSelect(e){
        setSelectedFile(e.target.files[0]);
        setImg(e.target.files[0].name);
    }
    function onClickHandler(){
        const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			`http://localhost:5000/upload/${selectedFile.name}`,
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	

    }


    return (
        <form encType="multipart/form-data" className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Artiste</label>
                <input
                type='text'
                placeholder="Nom de l'artiste ou du groupe"
                name='text'
                value={text}
                onChange = {(e) => setText(e.target.value)}
                required
                />
            </div>
            <div className="form-control">
                <label>Titre de l'événement</label>
                <input
                type='text'
                placeholder="Nom de l'événement ou de la tournée"
                value={title}
                onChange = {(e) => setTitle(e.target.value)}
                required
                />
            </div>
            <div className="form-control">
                <label>Prix</label>
                <input
                type='number'
                min='0'
                placeholder="Prix plancher"
                value={price}
                onChange = {(e) => setPrice(e.target.value)}
                required
                />
            </div>
            <div className="form-control">
                <label>Date de l'événement</label>
                <input
                type='date'
                placeholder="Date de l'événement"
                value={day}
                onChange = {(e) => setDay(e.target.value)}
                required
                />
            </div>
            <div className="form-control">
                <label>Lieu de l'événement</label>
                <input
                type='text'
                placeholder="Nom de la salle ou du bâtiment"
                value={venue}
                onChange = {(e) => setVenue(e.target.value)}
                required
                />
            </div>
            <div className="form-control">
                <label>Catégorie</label>
                <select className="form-control" onChange = {(e) => setCategory(e.target.value)} >
                    <option value="" disabled>Choisissez une catégorie</option>
                    <option value={category}>Musique</option>
                    <option value={category}>Danse</option>
                    <option value={category}>Opéra</option>
                    <option value={category}>Théâtre</option>
                    <option value={category}>Conte & Légende</option>
                    <option value={category}>Humour</option>
                </select>
            </div>
            <div className="form-control">
                <label>Choisissez une image</label>
                
                <input
                type='file'
                name='img'
                id='fileImg'
                accept='image/*'
                onChange = {onChangeSelect}
                required
                />
                <button type="button" className="btn btn-success btn-block" onClick={onClickHandler}>Upload</button> 
            </div>
            <div className="form-control form-control-check">
                <label>Promotion</label>
                <input
                type='checkbox'
                checked = {promotion}
                value={promotion}
                onChange = {(e) => setPromotion(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" className="btn btn-block" value="Enregistrer"/>
        </form>
    )
}

export default AddEvent;*/

