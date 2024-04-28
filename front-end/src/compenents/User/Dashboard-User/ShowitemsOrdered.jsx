import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { axios } from '../../../lib/axios';
import Header from '../../Header';
import Footer from '../../Footer';
import { IoMdArrowRoundBack } from "react-icons/io";

function ShowitemsOrdered() {
    const [produits, setProduits] = useState([]);
    const { commandeId } = useParams();
    useEffect(() => {
        const getProduitsOfCommandes = async () => {
            try {
                const response = await axios.get(`/commandes/${commandeId}/produits`,
                    {
                        headers: {
                            Authorization: `Bearer ${sessionStorage.getItem('auth_token')}`
                        }
                    });

                setProduits(response.data.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };
        getProduitsOfCommandes();
    }, []);

    return (
        <>
<Header/>
        <div>
            <div className='Order-History'>
                <a href='/user/myorder' > <IoMdArrowRoundBack /> Back</a>
                <h1>Items Ordered</h1>
                <table className='table-Order-History' border='1px' >
                    <thead>

                        <tr >
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>


                        </tr>
                    </thead>
                    <tbody >
                        {produits.map(produit => (
                            <tr key={produit.produitId}>
                                <td>
                                    <img src={produit.medias[0].image} alt='product' width='100px' height='100px' />
                                </td>

                                <td>
                                    <p>{produit.nom}</p>

                                </td>
                                <td>
                                    <p>{produit.prix} Dhs</p>


                                </td>
                                <td>
                                    <p>{produit.quantite}</p>

                                </td>
                                <td>
                                    <p>{produit.prix * produit.quantite} Dhs</p>

                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
        </>

    )
}

export default ShowitemsOrdered