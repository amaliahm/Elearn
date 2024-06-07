import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Users = () => {
    const navigate = useNavigate()
    let charge_cours = {
        "id": 24,
        "fullname": "bensaber",
        "email": "bensaberr@esi-sba.dz",
        "matricule": "27055885",
        "password": "255"
    }
    let assistant = {
        "id": 26,
        "fullname": "taouli",
        "email": "taouli@esi-sba.dz",
        "matricule": "1002589",
        "password": "1002589"
    }
    let etudiant = {
        "id": 22,
        "fullname": "othmane BOHENNI",
        "email": "o.bohenni@esi-sba.dz",
        "matricule": "12770789",
        "password": "12770789",
        "promo": 2,
        "niveau": 1,
        "cohorte": 1
    }
    return (
        <>
            <Button onClick={() => navigate('/user/home', { state: charge_cours })} >charge de cours</Button>
            <Button onClick={() => navigate('/user/home', { state: assistant })} >assistant</Button>
            <Button onClick={() => navigate('/user/home', { state: etudiant })} >etudiant</Button>
        </>
    )
}

export default Users