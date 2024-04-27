<div>
    <h2>Confirmation de commande</h2>
    <p>Merci pour votre commande!</p>
    
    <h3>Détails de la commande :</h3>
    <table>
        <thead>
            <tr>
                <th>ID de commande</th>
                <th>Prix total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ $order->commandeId }}</td>
                <td>{{ $order->prix_total }}Dh</td>
            </tr>
        </tbody>
    </table>
    
    <h3>Produits :</h3>
    <table>
        <thead>
            <tr>
                <th>Nom du produit</th>
                <th>Quantité</th>
                <th>Prix unitaire</th>
            </tr>
        </thead>
        <tbody>
            @foreach($order->ligneCommandes as $ligneCommande)
                <tr>
                    <td>{{ $ligneCommande->produit->nom }}</td>
                    <td>{{ $ligneCommande->quantite }}</td>
                    <td>{{ $ligneCommande->prix_unitaire }}Dh</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
