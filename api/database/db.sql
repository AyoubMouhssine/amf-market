insert into categories(nom) values ("Téléphone & Tablettes"),("TV & Hi Tech"),
("Informatique"),("Vêtements & Chaussures"),("Maison, cuisine & bureau"),
("Électroménager"),("Beauté & Santé"),("Jeux vidéos & Consoles"),("Sports & Loisirs"),("Bébé & Jouets"),("Supermarché");

insert into vendeurs(nom, prenom, cin, adresse, tel, email, password) values 
("Alami", "Amine", "CD578495", "Street 4 ,Rabat", "0765746374", "alami.amine11@gmail.com", "AlmiAmine!2002"),
("Ansari", "Mouad", "ZT899384", "Rue 3 Rte Sefrou Fes", "0654637263", "mouadAnsari_01@gmail.com", "mouad11_ansari!2002"),
("Mouhssine", "Ayoub", "CD983748", "tanger, maroc", "0654637283", "ayoub.mouhssine00@gmail.com", "ayoubX_@2002");

insert into stores(nom_store, description, vendeur_vendeurId) values
("amine store", "amine store is for technologie stuff", 2),
("amine Beauty", "amine Beauty is for Beauty stuff", 2),
("Ansari Tech", "Ansari Tech is for Tech stuff", 1),
("Ansari Tv", "Ansari Tv is for Tvs stuff", 1),
("Ayoub Info", "Ayoub Info is for Informatique stuff", 3);

insert into produits(store_storeId, categorie_categorieId, nom, prix, stock) values
(1, 1, "Realme 8", 2500.00, 10), 
(1, 3, "XIAOMI Monitor A22i", 4500.00, 10),
(2, 7, "Rowenta Lisseur NEW Optiliss SF3210F0", 339.00, 15),
(3, 2, "Telecommande echolink tornado", 34.99, 20),
(3, 2, "Chromecast", 129.00, 20) ,
(4, 2, "Étagère tv supérieure", 34.00, 30),
(4, 2, "support de television profesionales de 14 a 55", 97.00, 10),
(5, 3, "Redragon K617 FiZz White Red Switch", 499.00, 10),
(5, 3, "Tapis de souris fluide et souple Noir Antidérapant carbon", 25.00, 40),
(5, 3, "Adaptateur hdmi vga - hdmi vert vga - hdmi to vga", 39.50, 40);



-- Assuming you have 11 categories and 5 stores
-- Adjust the category IDs and store IDs based on your actual data

INSERT INTO produits (store_storeId, categorie_categorieId, nom, prix, stock)
SELECT 
    FLOOR(RAND() * 5) + 1 AS storeId,
    FLOOR(RAND() * 11) + 1 AS categoryId,
    CONCAT('Product', LPAD(ROW_NUMBER() OVER (), 2, '0')) AS nom,
    ROUND(RAND() * 1000) AS prix,
    FLOOR(RAND() * 100) AS stock
FROM
    information_schema.tables AS t1,
    information_schema.tables AS t2
LIMIT 40;
