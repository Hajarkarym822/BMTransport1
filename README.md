# 🚗 BM Transport - Documentation du Projet

Bienvenue dans la documentation officielle du site web **BM Transport**. Ce projet est une plateforme vitrine haut de gamme pour une société de transport de luxe, de location de véhicules avec chauffeur et de services de conciergerie.

Le site est conçu pour offrir une expérience utilisateur fluide, premium et moderne, mettant en avant l'élégance et le professionnalisme de la marque.

---

## 🛠️ Stack Technique

Ce projet utilise les dernières technologies web pour garantir performance et maintenabilité :

-   **Framework** : [React](https://react.dev/) (Vite)
-   **Styling** : [Tailwind CSS](https://tailwindcss.com/) pour un design responsive et utility-first.
-   **Animations** : [Framer Motion](https://www.framer.com/motion/) pour des transitions fluides et élégantes.
-   **Icônes** : [Lucide React](https://lucide.dev/) pour des icônes légères et modernes.
-   **Internationalisation** : Contexte React personnalisé (`TranslationContext`) pour le support multi-langues (FR, EN, ES).

---

## 📑 Structure du Site (Section par Section)

Le site est structuré comme une "One-Page App" avec une navigation fluide par ancre. Voici le détail de chaque composant :

### 1. 🧭 Navigation (Navbar)
-   **Rôle** : Barre de menu fixe permettant l'accès rapide à toutes les sections.
-   **Design** :
    -   *Desktop* : Style minimaliste "MetaMask", logo texte structuré, liens centrés épurés, et sélecteur de langue moderne.
    -   *Mobile* : Menu overlay plein écran (100dvh) avec typographie large, parfaitement adapté aux écrans tactiles.
-   **Fonctionnalités** : Détection du scroll (changement de style), indicateur de section active, changement de langue dynamique.

### 2. 🏠 En-tête (Hero Section)
-   **Rôle** : Première impression visuelle ("Above the fold").
-   **Contenu** : Slogan accrocheur ("Voyagez avec Élégance"), image de fond immersive (véhicule de luxe ou paysage urbain), et bouton d'appel à l'action (CTA) principal "Réserver".

### 3. ✨ Caractéristiques Clés (Features)
-   **Rôle** : Mettre en avant les atouts majeurs en un coup d'œil.
-   **Contenu** : Grille de 3 ou 4 points forts (ex: "Chauffeurs Professionnels", "Disponibilité 24/7", "Prix Fixes").

### 4. 🏢 À Propos (About)
-   **Rôle** : Présenter l'entreprise et ses valeurs.
-   **Contenu** : Texte descriptif sur l'historique et l'engagement qualité de BM Transport, souvent accompagné d'une image "Lifestyle".

### 5. 🛠️ Services
-   **Rôle** : Détailler l'offre commerciale.
-   **Contenu** : Cartes interactives présentant les prestations :
    -   *Transferts Aéroport*
    -   *Mise à disposition*
    -   *Événements & Mariages*
    -   *Excursions Touristiques*

### 6. 🚘 La Flotte (Fleet)
-   **Rôle** : Vitrine des véhicules disponibles.
-   **Contenu** : Galerie ou carrousel montrant les catégories de voitures (Berline Luxe, Van VIP, SUV Premium) avec leurs spécificités (nombre de passagers, bagages).

### 7. 💬 Témoignages (Testimonials)
-   **Rôle** : Preuve sociale et crédibilité.
-   **Contenu** : Retours clients satisfaits, affichés sous forme de citations élégantes.

### 8. 📞 Contact & Réservation
-   **Rôle** : Conversion finale.
-   **Contenu** : Formulaire de contact complet et/ou informations directes (Téléphone, Email, Adresse, Carte Google Maps).

### 9. 🦶 Pied de page (Footer)
-   **Rôle** : Informations légales et navigation secondaire.
-   **Contenu** : Liens rapides, mentions légales, réseaux sociaux et rappel du logo.

### 10. 🟢 Bouton WhatsApp
-   **Rôle** : Contact immédiat.
-   **Fonctionnalité** : Bouton flottant fixe en bas à droite permettant d'ouvrir directement une conversation WhatsApp avec le service client.

---

## 🚀 Installation & Démarrage

Pour lancer le projet localement :

1.  **Installer les dépendances** :
    ```bash
    npm install
    ```
2.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```
3.  **Ouvrir dans le navigateur** :
    Rendez-vous sur `http://localhost:5173`

---

## 🌍 Internationalisation (i18n)

Le site est nativement multilingue. Les traductions sont gérées dans le dossier `src/locales` ou directement via le `TranslationContext`.
-   **Ajouter une langue** : Ajoutez simplement les clés correspondantes dans l'objet de traduction et mettez à jour le tableau `languages` dans `Navbar.jsx`.

---

*Documentation générée pour BM Transport.*
