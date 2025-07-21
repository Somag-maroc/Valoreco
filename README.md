# Valoreco SARL - Website

Un site web professionnel et moderne pour Valoreco SARL, fournisseur marocain de solutions durables pour la construction et l'agriculture.

## 🎯 Vue d'ensemble

Ce site web présente les solutions premium de Valoreco SARL, incluant :
- **Films plastiques industriels et agricoles**
- **Tubes PPR** pour installations modernes
- **Revêtements extérieurs Novowood** - l'élégance du bois, la durabilité du composite

## 🎨 Design & Style

### Palette de couleurs
- **Vert principal** : `#004225` (Dark Forest Green)
- **Blanc** : `#ffffff`
- **Gris clair** : `#f8f9fa`
- **Anthracite** : `#343a40`
- **Gris** : `#6c757d`

### Typographie
- **Police principale** : Inter (Google Fonts)
- **Style** : Moderne, sobre, professionnel
- **Hiérarchie** : Claire et lisible

## 🏗️ Structure du site

### 1. **Header Navigation**
- Logo Valoreco en haut à gauche
- Menu de navigation responsive
- Design fixe avec effet de transparence

### 2. **Hero Section**
- Arrière-plan plein écran avec dégradé vert
- Titre : "Des solutions durables. Un style intemporel."
- Call-to-action : "Voir nos produits" et "Demander un devis"
- Indicateur de défilement animé

### 3. **Nos Solutions**
- 3 cartes présentant les produits principaux :
  - **Film Industriel** : Protection et emballage haute performance
  - **Film Agricole** : Technologies pour l'agriculture
  - **Tubes PPR** : Systèmes de tuyauterie modernes

### 4. **Novowood - Revêtement Extérieur**
- Section dédiée au produit premium
- Carrousel d'images automatique
- Caractéristiques : Écologique, Résistant, Esthétique
- CTA pour demander un échantillon

### 5. **Nos Réalisations**
- Galerie de projets avec filtres
- Catégories : Hôtel, Résidentiel, Collectif, Commercial
- Effet hover avec informations du projet

### 6. **Partenaires**
- Présentation des marques partenaires
- Novowood, BUCCHI, et autres
- Animations d'entrée

### 7. **Pourquoi Valoreco**
- Valeurs de l'entreprise :
  - Sur-mesure
  - Expertise (15+ ans)
  - Écoresponsable
  - Réactivité

### 8. **Contact**
- Formulaire de contact complet
- Informations de contact
- Bouton WhatsApp
- Téléchargement du catalogue

## 🚀 Fonctionnalités

### Animations & Interactions
- **AOS (Animate On Scroll)** : Animations au défilement
- **Parallax** : Effet sur la section hero
- **Hover effects** : Interactions sur les cartes et boutons
- **Gallery filtering** : Filtrage dynamique des réalisations
- **Showcase rotation** : Carrousel automatique Novowood

### Responsive Design
- **Mobile-first** : Optimisé pour tous les écrans
- **Navigation mobile** : Menu hamburger
- **Grid adaptatif** : Layouts qui s'adaptent
- **Images optimisées** : Chargement lazy

### Performance
- **CSS optimisé** : Variables CSS pour la cohérence
- **JavaScript modulaire** : Code organisé et maintenable
- **Debouncing** : Optimisation des événements scroll
- **Lazy loading** : Chargement différé des images

## 📱 Compatibilité

- ✅ **Desktop** : Chrome, Firefox, Safari, Edge
- ✅ **Tablet** : iPad, Android tablets
- ✅ **Mobile** : iPhone, Android phones
- ✅ **Accessibilité** : Navigation clavier, contrastes appropriés

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec Grid et Flexbox
- **JavaScript ES6+** : Interactivité et animations
- **AOS Library** : Animations au scroll
- **Google Fonts** : Typographie Inter

## 📁 Structure des fichiers

```
valoreco-website/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript interactif
├── README.md           # Documentation
└── assets/             # Ressources (à créer)
    ├── images/         # Images du site
    ├── favicon.ico     # Icône du site
    └── catalogues/     # Catalogues PDF
```

## 🚀 Installation et utilisation

### 1. Téléchargement
```bash
git clone [repository-url]
cd valoreco-website
```

### 2. Ouverture
Ouvrez simplement le fichier `index.html` dans votre navigateur web.

### 3. Développement local
Pour un serveur de développement :
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx serve .

# Avec PHP
php -S localhost:8000
```

## 📝 Personnalisation

### Couleurs
Modifiez les variables CSS dans `styles.css` :
```css
:root {
    --primary-green: #004225;
    --primary-green-light: #005a2e;
    /* ... autres couleurs */
}
```

### Contenu
- **Textes** : Modifiez directement dans `index.html`
- **Images** : Remplacez les placeholders par vos vraies images
- **Contact** : Mettez à jour les informations de contact

### Animations
Ajustez les paramètres AOS dans `script.js` :
```javascript
AOS.init({
    duration: 800,        // Durée des animations
    easing: 'ease-in-out', // Type d'animation
    once: true,           // Animation unique
    offset: 100           // Déclenchement
});
```

## 📧 Formulaire de contact

Le formulaire inclut :
- Validation côté client
- Notifications en temps réel
- Simulation d'envoi (à connecter à votre backend)

### Champs requis :
- Nom complet
- Email
- Service souhaité
- Message

## 🔧 Optimisations futures

### SEO
- [ ] Meta tags supplémentaires
- [ ] Schema.org markup
- [ ] Sitemap XML
- [ ] Robots.txt

### Performance
- [ ] Compression des images
- [ ] Minification CSS/JS
- [ ] CDN pour les ressources
- [ ] Service Worker pour le cache

### Fonctionnalités
- [ ] Blog/Actualités
- [ ] Système de devis en ligne
- [ ] Chat en direct
- [ ] Multilingue (AR/EN)

## 📞 Support

Pour toute question ou modification :
- **Email** : contact@valoreco.ma
- **WhatsApp** : +212 5 22 XX XX XX

## 📄 Licence

© 2024 Valoreco SARL. Tous droits réservés.

---

**Développé avec ❤️ pour l'excellence et la durabilité** 