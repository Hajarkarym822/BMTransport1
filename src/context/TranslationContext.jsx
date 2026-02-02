import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

// Translation data
const translations = {
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À Propos',
            services: 'Services',
            fleet: 'Flotte',
            contact: 'Contact',
            contactUs: 'Contactez-nous'
        },
        hero: {
            badge: 'Transport Touristique & Location de Luxe',
            heading: 'Voyagez avec Élégance et Confort',
            subtitle: 'Votre partenaire privilégié pour la location de véhicules de luxe avec chauffeur, transferts aéroports et excursions touristiques sur mesure.',
            ctaBooking: 'Réserver un Chauffeur',
            ctaServices: 'Nos Services',
            ctaFleet: 'Voir la Flotte',
            statStatus: 'En service',
            statVehicles: 'Véhicules'
        },
        heroNew: {
            titlePart1: 'Connectez-vous',
            titlePart2: 'à l\'excellence',
            titlePart3: 'du transport.',
            tabTransfer: 'transfert',
            tabDisposal: 'mise à dispo',
            tabCircuit: 'circuit',
            destPlaceholder: 'Votre destination...',
            quote: '"Transformez chaque déplacement en une expérience inoubliable. Le luxe et la sérénité à chaque kilomètre."',
            cardCollection: 'Collection Exclusiv',
            cardPrice: 'À partir de 500 MAD',
            modalTitle: 'Finaliser votre demande',
            modalSubtitle: 'Vous êtes sur le point de réserver une course d\'exception. Choisissez votre méthode préférée.',
            destinationUndefined: 'Destination non définie',
            btnWhatsapp: 'Commander sur WhatsApp',
            btnEmail: 'Envoyer demande par Email',
            terms: 'En continuant, vous acceptez d\'être contacté par notre équipe pour confirmer les détails de votre réservation.'
        },
        navbar: {
            home: 'Accueil',
            services: 'Services',
            ourServices: 'Nos Services',
            contact: 'Me Contacter',
            reserve: 'Réserver',
            bookNow: 'Réserver Maintenant',
            items: {
                driver: 'Location avec Chauffeur',
                concierge: 'Conciergerie',
                corporate: 'Entreprises & Événements',
                fleet: 'Flotte',
                destinations: 'Destinations',
                reviews: 'Avis',
                about: 'À Propos'
            }
        },
        servicesSection: {
            subtitle: 'Nos Expertises',
            title: 'Services',
            titleHighlight: 'Exclusifs',
            description: 'Une gamme complète de solutions haut de gamme pour répondre à toutes vos exigences de mobilité et d\'accompagnement.',
            driverTitle: 'Location avec Chauffeur',
            driverDesc: 'L\'excellence du déplacement privé. Transferts aéroports, mises à disposition et voyages longue distance dans un confort absolu.',
            conciergeTitle: 'Conciergerie de Luxe',
            conciergeDesc: 'Bien plus qu\'un transport. Réservations d\'hôtels, restaurants, accès VIP et assistance personnalisée pour chaque moment de votre séjour.',
            corpTitle: 'Entreprises & Événements',
            corpDesc: 'Logistique de transport sur-mesure pour vos séminaires, congrès et événements d\'entreprise. Une gestion de flotte rigoureuse et professionnelle.',
            learnMore: 'En savoir plus'
        },
        destinations: {
            subtitle: 'Voyagez partout au Maroc',
            title: 'Nos Destinations',
            description: 'Découvrez le Royaume sous son meilleur jour. Nos chauffeurs experts vous emmènent dans les lieux les plus prestigieux.',
            explore: 'Explorer',
            marrakech: 'La Perle du Sud',
            casablanca: 'Cœur Économique',
            tanger: 'Porte de l\'Afrique',
            agadir: 'Perle de l\'Océan'
        },
        testimonialsSection: {
            subtitle: 'Ce qu\'ils disent',
            title: 'Avis Clients',
            description: 'La satisfaction de nos clients est notre priorité absolue. Découvrez leurs retours sur nos services.'
        },
        aboutSection: {
            subtitle: 'À Propos de Nous',
            yearsExp: 'Années d\'expérience',
            service: 'Service',
            satisfaction: 'Satisfaction'
        },
        footer: {
            description: 'L\'excellence du transport de luxe au Maroc. Chauffeurs privés, conciergerie et expériences sur-mesure.',
            navigation: 'Navigation',
            contact: 'Contact',
            rights: 'Tous droits réservés.',
            privacy: 'Confidentialité',
            legal: 'Mentions Légales'
        },
        fleetSection: {
            subtitle: 'Notre Collection',
            title: 'Flotte Exclusive',
            description: 'Découvrez notre sélection de véhicules de prestige, alliant confort absolu, technologie de pointe et sécurité maximale.',
            seats: 'Places',
            luggage: 'Valises',
            book: 'Réserver',
            features: {
                leather: 'Cuir Nappa',
                wifi: 'Wifi 5G',
                tablets: 'Tablettes',
                tinted: 'Vitres Teintées',
                ac: 'Climatisation Tri-zone',
                vipLounge: 'Salon VIP',
                serenity: 'Sérénité Absolue',
                premiumService: 'Service Premium',
                expertDriver: 'Chauffeur Expert',
                loungeConfig: 'Configuration Salon',
                centerTable: 'Table Centrale',
                ambientLight: 'Lumière Ambiance',
                fridge: 'Frigo'
            }
        },
        legalPage: {
            title: "Mentions Légales",
            editorTitle: "1. Éditeur du Site",
            editorText: "Le site <strong>BM Transport</strong> est édité par la société BM TRANSPORT, société spécialisée dans le transport touristique et la location de véhicules de luxe.",
            address: "Siège Social :",
            email: "Email :",
            phone: "Téléphone :",
            legalForm: "Forme Juridique :",
            hostingTitle: "2. Hébergement",
            hostingText: "Ce site est hébergé par [Nom de l'Hébergeur], [Adresse de l'Hébergeur].",
            ipTitle: "3. Propriété Intellectuelle",
            ipText1: "L'ensemble de ce site relève de la législation marocaine et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.",
            ipText2: "La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.",
            liabilityTitle: "4. Responsabilité",
            liabilityText: "BM Transport s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.",
            copyright: "© 2026 BM Transport. Tous droits réservés."
        },
        privacyPage: {
            title: "Politique de Confidentialité",
            intro: "Chez BM Transport, nous accordons une importance capitale à la confidentialité de vos données. Cette politique détaille comment nous collectons, utilisons et protégeons vos informations personnelles.",
            collectionTitle: "1. Collecte des Données",
            collectionText: "Nous collectons les informations que vous nous fournissez directement lorsque vous réservez un véhicule, demandez un devis ou nous contactez. Cela inclut :",
            collectionList: ["Identité (Nom, Prénom)", "Coordonnées (Email, Téléphone)", "Détails du voyage (Dates, Lieux, Préférences)"],
            usageTitle: "2. Utilisation des Données",
            usageText: "Vos données sont utilisées exclusivement pour :",
            usageList: ["Traiter vos réservations et fournir nos services de transport.", "Communiquer avec vous concernant votre trajet.", "Améliorer nos services et votre expérience client."],
            protectionTitle: "3. Protection des Données",
            protectionText: "Nous mettons en œuvre des mesures de sécurité strictes pour protéger vos informations contre tout accès non autorisé, modification ou divulgation. Vos données ne sont jamais vendues à des tiers.",
            rightsTitle: "4. Vos Droits",
            rightsText: "Conformément à la législation en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ce droit, contactez-nous via notre formulaire de contact.",
            update: "Dernière mise à jour : Février 2026"
        },
        features: {
            heading: 'Pourquoi Choisir BM Transport ?',
            description: 'Notre engagement envers l\'excellence nous distingue. Nous combinons technologie de pointe, expertise humaine et une flotte diversifiée pour vous offrir le meilleur service possible.',
            items: {
                luxury: { title: "Véhicules Haut de Gamme", desc: "Une flotte récente de Mercedes, Vans et 4x4 de luxe." },
                drivers: { title: "Chauffeurs Multilingues", desc: "Personnel professionnel parlant plusieurs langues pour vous accompagner." },
                welcome: { title: "Accueil Personnalisé", desc: "Pancarte nominative et assistance bagages dès votre arrivée." },
                security: { title: "Sécurité Maximale", desc: "Véhicules entretenus et conduite sûre pour votre tranquillité." }
            },
            stat: 'Taux de satisfaction de nos clients'
        },
        about: {
            subtitle: 'À propos de BM Transport',
            heading: 'L\'Excellence du Transport',
            description: 'Spécialiste du transport touristique et la location de véhicules de luxe avec chauffeur au Maroc. Transferts, excursions ou événements VIP, nous garantissons un service premium.',
            points: [
                "Véhicules de luxe (Mercedes, Vans, 4x4)",
                "Chauffeurs professionnels multilingues",
                "Accueil personnalisé (Pancarte, Bagages)",
                "Disponibilité 24/7 pour vos déplacements"
            ],
            stats: {
                vip: 'Service Premium',
                satisfaction: 'Satisfaction',
                assistance: 'Assistance'
            }
        },
        services: {
            subtitle: 'Nos Services',
            heading: 'Solutions de Transport Complètes',
            description: 'Nous offrons une gamme variée de services pour répondre à tous vos besoins en transport et logistique.',
            items: {
                rental: { title: 'Location avec Chauffeur', desc: 'Véhicules de luxe (Mercedes, Vans) for particuliers ou entreprises. Chauffeurs professionnels à votre disposition.' },
                transfer: { title: 'Transferts Aéroport & Gare', desc: 'Accueil personnalisé avec pancarte, assistance bagages et ponctualité garantie pour vos arrivées et départs.' },
                excursion: { title: 'Excursions Touristiques', desc: 'Circuits personnalisés pour découvrir le Maroc (Marrakech, Villes Impériales) avec des chauffeurs experts.' },
                events: { title: 'Événements Spéciaux', desc: 'Service haut de gamme pour mariages, séminaires et conférences. Transport VIP pour vos invités de marque.' },
                disposal: { title: 'Mise à Disposition', desc: 'Location de véhicule with chauffeur à la journée ou demi-journée pour une flexibilité totale.' },
                corporate: { title: 'Transport Corporatif', desc: 'Solutions de transport pour entreprises, délégations et transport de personnel avec facturation simplifiée.' }
            },
            learnMore: 'En savoir plus'
        },
        fleet: {
            heading: 'Notre Flotte',
            mainTitle: 'La <span class="text-secondary">Flotte</span> d\'Excellence',
            description: 'Découvrez nos véhicules modernes et diversifiés, adaptés à tous types de missions.',
            filters: { all: 'Tous', luxury: 'Luxe', tourism: 'Touristique', adventure: 'Aventure' },
            details: 'Détails',
            capacityLabel: 'Capacité',
            luggageLabel: 'Bagages',
            featuresLabel: 'Caractéristiques',
            placesUnit: 'Places',
            luggageUnit: 'Sacs',
            items: {
                berline: { name: 'Vito Panel (Utilitaire)', desc: 'Idéal pour vos trajets légers et vos livraisons, ce van robuste offre 3 places confortables et un espace de chargement modulable. Parfait pour les déplacements pratiques et efficaces.' },
                van: { name: 'Vito Mixto (Mixte)', desc: 'Polyvalent et spacieux, ce modèle combine passagers et bagages avec jusqu’à 6 places. Il est parfait pour les groupes moyens et les excursions nécessitant un espace supplémentaire pour les bagages.' },
                minibus: { name: 'Vito Tourer (Passagers)', desc: 'Conçu pour le confort de vos voyageurs, ce van peut accueillir jusqu’à 9 personnes. Idéal pour les circuits touristiques et les transferts, il allie sécurité et confort pour tous vos trajets.' },
                suv: { name: '4x4 Tout-Terrain', desc: 'Toyota Land Cruiser / Prado. Pour les circuits dans le désert et l\'Atlas.' }
            },
            vehicleFeatures: {
                wifi: 'WiFi',
                leather: 'Cuir',
                ac: 'AC',
                vip: 'VIP',
                space: 'Grand Espace',
                modularity: 'Modularité',
                family: 'Famille',
                group: 'Transport Groupe',
                comfort: 'Confort Extra',
                fridge: 'Mini Fridge',
                tv: 'TV',
                premium4x4: '4x4 Premium',
                offroad: 'Tout Terrain',
                atlas: 'Atlas/Désert'
            }
        },
        booking: {
            title: 'RÉSERVATION',
            gallery: 'Galerie & Détails',
            personalInfo: '1. Informations Personnelles',
            tripDetails: '2. Détails du trajet',
            firstName: 'Prénom',
            firstNamePH: 'Votre prénom',
            lastName: 'Nom',
            lastNamePH: 'Votre nom',
            departureCity: 'Ville de départ',
            departureCityPH: 'Ex: Marrakech',
            arrivalCity: 'Ville d\'arrivée',
            arrivalCityPH: 'Ex: Casablanca',
            departureDate: 'Date de départ',
            departureDatePH: 'Choisir date',
            time: 'Heure',
            timePH: 'Heure',
            returnDate: 'Date de retour',
            returnDatePH: 'Choisir date de retour',
            optional: 'Optionnel',
            whatsapp: 'Commander sur WhatsApp',
            email: 'Envoyer demande par Email',
            today: 'Aujourd\'hui',
            selectDate: 'Choisir date'
        },
        testimonials: {
            heading: 'Ce que disent nos clients',
            subheading: 'La satisfaction de nos clients est notre meilleure carte de visite.',
            items: [
                { name: 'Jean Dupont', role: 'Voyageur d\'Affaires', text: 'Service impeccable. Le chauffeur était ponctuel et la voiture très confortable. Je recommande pour tout déplacement professionnel.' },
                { name: 'Sarah Miller', role: 'Touriste', text: 'Une expérience inoubliable au Maroc grâce à BM Transport. Notre chauffeur était un excellent guide.' },
                { name: 'Marc Lavoine', role: 'Organisateur Événementiel', text: 'Gestion parfaite des transferts pour notre séminaire. Flexibilité et professionnalisme au rendez-vous.' }
            ]
        },
        contact: {
            subtitle: 'Contactez-nous',
            heading: 'Prêt à démarrer votre projet ?',
            description: 'Contactez-nous dès aujourd\'hui pour un devis gratuit ou pour toute demande d\'information. Notre équipe est à votre écoute.',
            info: { phone: 'Téléphone', email: 'Email', address: 'Siège Social', hours: 'Lundi - Samedi, 9h à 18h', response: 'Réponse sous 24h' },
            form: {
                title: 'Envoyez-nous un message',
                name: 'Nom complet',
                namePH: 'Votre nom',
                email: 'Email',
                emailPH: 'votre@email.com',
                subject: 'Sujet',
                subjects: ['Demande de devis', 'Transport touristique', 'Mise à disposition', 'Autre'],
                message: 'Message',
                messagePH: 'Comment pouvons-nous vous aider ?',
                send: 'Envoyer le message',
                privacy: 'En envoyant ce formulaire, vous acceptez notre politique de confidentialité.'
            }
        },
        footer: {
            description: 'Votre partenaire de confiance pour tous vos besoins de transport touristique et location de luxe. Excellence et sécurité à chaque kilomètre.',
            quickLinks: 'Liens Rapides',
            contact: 'Contactez-nous',
            newsletter: { title: 'Newsletter', text: 'Abonnez-vous pour recevoir nos actualités.', placeholder: 'Votre email', button: 'S\'abonner' },
            rights: 'Tous droits réservés.',
            privacy: 'Confidentialité',
            legal: 'Mentions Légales'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            fleet: 'Fleet',
            contact: 'Contact',
            contactUs: 'Contact Us'
        },
        hero: {
            badge: 'Tourist Transport & Luxury Rental',
            heading: 'Travel with Elegance and Comfort',
            subtitle: 'Your privileged partner for luxury car rental with driver, airport transfers and tailored tourist excursions.',
            ctaBooking: 'Book a Driver',
            ctaServices: 'Our Services',
            ctaFleet: 'View Fleet',
            statStatus: 'In Service',
            statVehicles: 'Vehicles'
        },
        heroNew: {
            titlePart1: 'Connect',
            titlePart2: 'to transport',
            titlePart3: 'excellence.',
            tabTransfer: 'transfer',
            tabDisposal: 'disposal',
            tabCircuit: 'circuit',
            destPlaceholder: 'Your destination...',
            quote: '"Transform every journey into an unforgettable experience. Luxury and serenity at every kilometer."',
            cardCollection: 'Exclusive Collection',
            cardPrice: 'From 500 MAD',
            modalTitle: 'Finalize your request',
            modalSubtitle: 'You are about to book an exceptional ride. Choose your preferred method.',
            destinationUndefined: 'Destination undefined',
            btnWhatsapp: 'Order on WhatsApp',
            btnEmail: 'Send Request via Email',
            terms: 'By continuing, you accept to be contacted by our team to confirm your booking details.'
        },
        navbar: {
            home: 'Home',
            services: 'Services',
            ourServices: 'Our Services',
            contact: 'Contact Me',
            reserve: 'Book',
            bookNow: 'Book Now',
            items: {
                driver: 'Chauffeur Service',
                concierge: 'Concierge',
                corporate: 'Corporate & Events',
                fleet: 'Fleet',
                destinations: 'Destinations',
                reviews: 'Reviews',
                about: 'About'
            }
        },
        servicesSection: {
            subtitle: 'Our Expertise',
            title: 'Exclusive',
            titleHighlight: 'Services',
            description: 'A complete range of high-end solutions to meet all your mobility and support requirements.',
            driverTitle: 'Chauffeur Service',
            driverDesc: 'Excellence in private travel. Airport transfers, disposal services, and long-distance trips in absolute comfort.',
            conciergeTitle: 'Luxury Concierge',
            conciergeDesc: 'More than just transport. Hotel reservations, restaurants, VIP access, and personalized assistance for every moment of your stay.',
            corpTitle: 'Corporate & Events',
            corpDesc: 'Tailored transport logistics for your seminars, congresses, and corporate events. Rigorous and professional fleet management.',
            learnMore: 'Learn more'
        },
        destinations: {
            subtitle: 'Travel everywhere in Morocco',
            title: 'Our Destinations',
            description: 'Discover the Kingdom in its best light. Our expert drivers take you to the most prestigious locations.',
            explore: 'Explore',
            marrakech: 'The Pearl of the South',
            casablanca: 'Economic Heart',
            tanger: 'Gateway to Africa',
            agadir: 'Pearl of the Ocean'
        },
        testimonialsSection: {
            subtitle: 'What they say',
            title: 'Client Reviews',
            description: 'Client satisfaction is our top priority. Discover their feedback on our services.'
        },
        aboutSection: {
            subtitle: 'About Us',
            yearsExp: 'Years of experience',
            service: 'Service',
            satisfaction: 'Satisfaction'
        },
        footer: {
            description: 'Excellence in luxury transport in Morocco. Private chauffeurs, concierge, and tailored experiences.',
            navigation: 'Navigation',
            contact: 'Contact',
            rights: 'All rights reserved.',
            privacy: 'Privacy Policy',
            legal: 'Legal Mentions'
        },
        fleetSection: {
            subtitle: 'Our Collection',
            title: 'Exclusive Fleet',
            description: 'Discover our selection of prestigious vehicles, combining absolute comfort, cutting-edge technology, and maximum safety.',
            seats: 'Seats',
            luggage: 'Luggage',
            book: 'Book',
            features: {
                leather: 'Nappa Leather',
                wifi: '5G Wifi',
                tablets: 'Tablets',
                tinted: 'Tinted Windows',
                ac: 'Tri-zone AC',
                vipLounge: 'VIP Lounge',
                serenity: 'Absolute Serenity',
                premiumService: 'Premium Service',
                expertDriver: 'Expert Chauffeur',
                loungeConfig: 'Lounge Configuration',
                centerTable: 'Center Table',
                ambientLight: 'Ambient Light',
                fridge: 'Fridge'
            }
        },
        legalPage: {
            title: "Legal Mentions",
            editorTitle: "1. Site Editor",
            editorText: "The <strong>BM Transport</strong> website is edited by BM TRANSPORT, a company specializing in tourist transport and luxury vehicle rental.",
            address: "Headquarters:",
            email: "Email:",
            phone: "Phone:",
            legalForm: "Legal Form:",
            hostingTitle: "2. Hosting",
            hostingText: "This site is hosted by [Host Name], [Host Address].",
            ipTitle: "3. Intellectual Property",
            ipText1: "The entire site is subject to Moroccan and international legislation on copyright and intellectual property. All reproduction rights are reserved, including downloadable documents and iconographic and photographic representations.",
            ipText2: "Reproduction of all or part of this site on any electronic medium whatsoever is strictly prohibited without the express authorization of the publication director.",
            liabilityTitle: "4. Liability",
            liabilityText: "BM Transport strives to ensure the accuracy and updating of the information disseminated on this site, the content of which it reserves the right to correct at any time and without notice.",
            copyright: "© 2026 BM Transport. All rights reserved."
        },
        privacyPage: {
            title: "Privacy Policy",
            intro: "At BM Transport, we place paramount importance on the privacy of your data. This policy details how we collect, use, and protect your personal information.",
            collectionTitle: "1. Data Collection",
            collectionText: "We collect information that you provide directly to us when you book a vehicle, request a quote, or contact us. This includes:",
            collectionList: ["Identity (Name, First Name)", "Contact Details (Email, Phone)", "Trip Details (Dates, Locations, Preferences)"],
            usageTitle: "2. Data Usage",
            usageText: "Your data is used exclusively to:",
            usageList: ["Process your bookings and provide our transport services.", "Communicate with you regarding your trip.", "Improve our services and your customer experience."],
            protectionTitle: "3. Data Protection",
            protectionText: "We implement strict security measures to protect your information against unauthorized access, modification, or disclosure. Your data is never sold to third parties.",
            rightsTitle: "4. Your Rights",
            rightsText: "In accordance with current legislation, you have the right to access, rectify, and delete your personal data. To exercise this right, contact us via our contact form.",
            update: "Last updated: February 2026"
        },
        features: {
            heading: 'Why Choose BM Transport?',
            description: 'Our commitment to excellence sets us apart. We combine cutting-edge technology, human expertise and a diverse fleet to offer you the best possible service.',
            items: {
                luxury: { title: "High-End Vehicles", desc: "A recent fleet of Mercedes, Vans and luxury 4x4s." },
                drivers: { title: "Multilingual Drivers", desc: "Professional staff speaking multiple languages to accompany you." },
                welcome: { title: "Personalized Welcome", desc: "Name sign and luggage assistance upon your arrival." },
                security: { title: "Maximum Security", desc: "Maintained vehicles and safe driving for your peace of mind." }
            },
            stat: 'Client Satisfaction Rate'
        },
        about: {
            subtitle: 'About BM Transport',
            heading: 'Excellence in Tourist Transport in Morocco',
            description: 'Specialist in tourist transport and luxury vehicle rental with driver, BM TRANSPORTS accompanies you throughout Morocco. Whether for an airport transfer, a tourist excursion or a VIP event, we guarantee premium service.',
            points: [
                "Luxury vehicles (Mercedes, Vans, 4x4)",
                "Professional multilingual drivers",
                "Personalized welcome (Sign, Luggage)",
                "24/7 availability for your trips"
            ],
            stats: {
                vip: 'Premium Service',
                satisfaction: 'Satisfaction',
                assistance: 'Assistance'
            }
        },
        services: {
            subtitle: 'Our Services',
            heading: 'Complete Transport Solutions',
            description: 'We offer a wide range of services to meet all your transport and logistics needs.',
            items: {
                rental: { title: 'Rental with Driver', desc: 'Luxury vehicles (Mercedes, Vans) for individuals or companies. Professional drivers at your disposal.' },
                transfer: { title: 'Airport & Station Transfers', desc: 'Personalized welcome with sign, luggage assistance and guaranteed punctuality for your arrivals and departures.' },
                excursion: { title: 'Tourist Excursions', desc: 'Customized tours to discover Morocco (Marrakech, Imperial Cities) with expert drivers.' },
                events: { title: 'Special Events', desc: 'High-end service for weddings, seminars and conferences. VIP transport for your distinguished guests.' },
                disposal: { title: 'At Disposal', desc: 'Vehicle rental with driver for the day or half-day for total flexibility.' },
                corporate: { title: 'Corporate Transport', desc: 'Transport solutions for companies, delegations and staff transport with simplified billing.' }
            },
            learnMore: 'Learn more'
        },
        fleet: {
            heading: 'Our Fleet',
            mainTitle: 'The <span class="text-secondary">Fleet</span> of Excellence',
            description: 'Discover our modern and diverse vehicles, adapted to all types of missions.',
            filters: { all: 'All', luxury: 'Luxury', tourism: 'Tourism', adventure: 'Adventure' },
            details: 'Details',
            capacityLabel: 'Capacity',
            luggageLabel: 'Luggage',
            featuresLabel: 'Features',
            placesUnit: 'Seats',
            luggageUnit: 'Bags',
            items: {
                berline: { name: 'Luxury Sedan', desc: 'Mercedes E-Class or equivalent. Ideal for VIP transfers and business transport.' },
                van: { name: 'Premium Van', desc: 'Mercedes V-Class. Absolute comfort for small groups and families.' },
                minibus: { name: 'Tourist Minibus', desc: 'VIP Sprinter fitted for comfort on long distances and excursions.' },
                suv: { name: '4x4 Off-Road', desc: 'Toyota Land Cruiser / Prado. For desert and Atlas circuits.' }
            },
            vehicleFeatures: {
                wifi: 'WiFi',
                leather: 'Leather Seats',
                ac: 'AC',
                vip: 'VIP Service',
                space: 'Large Space',
                modularity: 'Modularity',
                family: 'Family Friendly',
                group: 'Group Transport',
                comfort: 'Extra Comfort',
                fridge: 'Mini Fridge',
                tv: 'TV',
                premium4x4: 'Premium 4x4',
                offroad: 'Off-Road',
                atlas: 'Atlas/Desert'
            }
        },
        booking: {
            title: 'BOOKING',
            gallery: 'Gallery & Details',
            personalInfo: '1. Personal Information',
            tripDetails: '2. Trip Details',
            firstName: 'First Name',
            firstNamePH: 'Your first name',
            lastName: 'Last Name',
            lastNamePH: 'Your last name',
            departureCity: 'Departure City',
            departureCityPH: 'Ex: Marrakech',
            arrivalCity: 'Arrival City',
            arrivalCityPH: 'Ex: Casablanca',
            departureDate: 'Departure Date',
            departureDatePH: 'Select date',
            time: 'Time',
            timePH: 'Time',
            returnDate: 'Return Date',
            returnDatePH: 'Select return date',
            optional: 'Optional',
            whatsapp: 'Book on WhatsApp',
            email: 'Send Request via Email',
            today: 'Today',
            selectDate: 'Select date'
        },
        testimonials: {
            heading: 'What our clients say',
            subheading: 'Our clients satisfaction is our best business card.',
            items: [
                { name: 'John Doe', role: 'Business Traveler', text: 'Impeccable service. The driver was punctual and the car very comfortable. I recommend for any professional trip.' },
                { name: 'Sarah Miller', role: 'Tourist', text: 'Unforgettable experience in Morocco thanks to BM Transport. Our driver was an excellent guide.' },
                { name: 'Mark Levin', role: 'Event Planner', text: 'Perfect management of transfers for our seminar. Flexibility and professionalism were there.' }
            ]
        },
        contact: {
            subtitle: 'Contact Us',
            heading: 'Ready to start your project?',
            description: 'Contact us today for a free quote or any information request. Our team is at your disposal.',
            info: { phone: 'Phone', email: 'Email', address: 'Headquarters', hours: 'Monday - Saturday, 9am to 6pm', response: 'Response within 24h' },
            form: {
                title: 'Send us a message',
                name: 'Full Name',
                namePH: 'Your name',
                email: 'Email',
                emailPH: 'your@email.com',
                subject: 'Subject',
                subjects: ['Quote Request', 'Tourist Transport', 'At Disposal', 'Other'],
                message: 'Message',
                messagePH: 'How can we help you?',
                send: 'Send Message',
                privacy: 'By sending this form, you accept our privacy policy.'
            }
        },
        footer: {
            description: 'Your trusted partner for all your tourist transport and luxury rental needs. Excellence and safety at every kilometer.',
            quickLinks: 'Quick Links',
            contact: 'Contact Us',
            newsletter: { title: 'Newsletter', text: 'Subscribe to receive our news.', placeholder: 'Your email', button: 'Subscribe' },
            rights: 'All rights reserved.',
            privacy: 'Privacy',
            legal: 'Legal Notice'
        }
    },
    es: {
        nav: {
            home: 'Inicio',
            about: 'Nosotros',
            services: 'Servicios',
            fleet: 'Flota',
            contact: 'Contacto',
            contactUs: 'Contáctenos'
        },
        hero: {
            badge: 'Transporte Turístico y Alquiler de Lujo',
            heading: 'Viaja con Elegancia y Confort',
            subtitle: 'Su socio privilegiado para el alquiler de vehículos de lujo con conductor, traslados al aeropuerto y excursiones turísticas a medida.',
            ctaBooking: 'Reservar Conductor',
            ctaServices: 'Nuestros Servicios',
            ctaFleet: 'Ver Flota',
            statStatus: 'En Servicio',
            statVehicles: 'Vehículos'
        },
        heroNew: {
            titlePart1: 'Conéctese',
            titlePart2: 'a la excelencia',
            titlePart3: 'del transporte.',
            tabTransfer: 'traslado',
            tabDisposal: 'a disposición',
            tabCircuit: 'circuito',
            destPlaceholder: 'Su destino...',
            quote: '"Transforme cada viaje en una experiencia inolvidable. Lujo y serenidad en cada kilómetro."',
            cardCollection: 'Colección Exclusiva',
            cardPrice: 'Desde 500 MAD',
            modalTitle: 'Finalizar su solicitud',
            modalSubtitle: 'Está a punto de reservar un viaje excepcional. Elija su método preferido.',
            destinationUndefined: 'Destino no definido',
            btnWhatsapp: 'Pedir por WhatsApp',
            btnEmail: 'Enviar solicitud por Email',
            terms: 'Al continuar, acepta ser contactado por nuestro equipo para confirmar los detalles de su reserva.'
        },
        navbar: {
            home: 'Inicio',
            services: 'Servicios',
            ourServices: 'Nuestros Servicios',
            contact: 'Contactarme',
            reserve: 'Reservar',
            bookNow: 'Reservar Ahora',
            items: {
                driver: 'Alquiler con Conductor',
                concierge: 'Conserjería',
                corporate: 'Empresas y Eventos',
                fleet: 'Flota',
                destinations: 'Destinos',
                reviews: 'Opiniones',
                about: 'Nosotros'
            }
        },
        servicesSection: {
            subtitle: 'Nuestras Experiencias',
            title: 'Servicios',
            titleHighlight: 'Exclusivos',
            description: 'Una gama completa de soluciones de alta gama para satisfacer todas sus necesidades de movilidad y acompañamiento.',
            driverTitle: 'Alquiler con Conductor',
            driverDesc: 'La excelencia en el transporte privado. Traslados al aeropuerto, disposiciones y viajes de larga distancia con absoluta comodidad.',
            conciergeTitle: 'Conserjería de Lujo',
            conciergeDesc: 'Mucho más que transporte. Reservas de hoteles, restaurantes, acceso VIP y asistencia personalizada para cada momento de su estancia.',
            corpTitle: 'Empresas y Eventos',
            corpDesc: 'Logística de transporte a medida para sus seminarios, congresos y eventos corporativos. Una gestión de flota rigurosa y profesional.',
            learnMore: 'Saber más'
        },
        destinations: {
            subtitle: 'Viaje por todo Marruecos',
            title: 'Nuestros Destinos',
            description: 'Descubra el Reino en su mejor momento. Nuestros conductores expertos lo llevan a los lugares más prestigiosos.',
            explore: 'Explorar',
            marrakech: 'La Perla del Sur',
            casablanca: 'Corazón Económico',
            tanger: 'Puerta de África',
            agadir: 'Perla del Océano'
        },
        testimonialsSection: {
            subtitle: 'Lo que dicen',
            title: 'Opiniones de Clientes',
            description: 'La satisfacción de nuestros clientes es nuestra prioridad absoluta. Descubra sus comentarios sobre nuestros servicios.'
        },
        aboutSection: {
            subtitle: 'Sobre Nosotros',
            yearsExp: 'Años de experiencia',
            service: 'Servicio',
            satisfaction: 'Satisfacción'
        },
        footer: {
            description: 'La excelencia en el transporte de lujo en Marruecos. Conductores privados, conserjería y experiencias a medida.',
            navigation: 'Navegación',
            contact: 'Contacto',
            rights: 'Todos los derechos reservados.',
            privacy: 'Privacidad',
            legal: 'Menciones Legales'
        },
        features: {
            heading: '¿Por qué elegir BM Transport?',
            description: 'Nuestro compromiso con la excelencia nos distingue. Combinamos tecnología de punta, experiencia humana y una flota diversa para ofrecerle el mejor servicio posible.',
            items: {
                luxury: { title: "Vehículos de Alta Gama", desc: "Una flota reciente de Mercedes, Vans y 4x4 de lujo." },
                drivers: { title: "Conductores Multilingües", desc: "Personal profesional que habla varios idiomas para acompañarlo." },
                welcome: { title: "Bienvenida Personalizada", desc: "Letrero con su nombre y asistencia con el equipaje a su llegada." },
                security: { title: "Seguridad Máxima", desc: "Vehículos mantenidos y conducción segura para su tranquilidad." }
            },
            stat: 'Tasa de satisfacción del cliente'
        },
        about: {
            subtitle: 'Sobre BM Transport',
            heading: 'La excelencia en el Transporte Turístico en Marruecos',
            description: 'Especialista en transporte turístico y alquiler de vehículos de lujo con conductor, BM TRANSPORTS le acompaña por todo Marruecos. Ya sea para un traslado al aeropuerto, una excursión turística o un evento VIP, garantizamos un servicio premium.',
            points: [
                "Vehículos de lujo (Mercedes, Vans, 4x4)",
                "Conductores profesionales multilingües",
                "Bienvenida personalizada (Letrero, Equipaje)",
                "Disponibilidad 24/7 para sus viajes"
            ],
            stats: {
                vip: 'Servicio Premium',
                satisfaction: 'Satisfacción',
                assistance: 'Asistencia'
            }
        },
        services: {
            subtitle: 'Nuestros Servicios',
            heading: 'Soluciones de Transporte Completas',
            description: 'Ofrecemos una amplia gama de servicios para satisfacer todas sus necesidades de transporte y logística.',
            items: {
                rental: { title: 'Alquiler con Conductor', desc: 'Vehículos de lujo (Mercedes, Vans) para particulares o empresas. Conductores profesionales a su disposición.' },
                transfer: { title: 'Traslados Aeropuerto y Estación', desc: 'Bienvenida personalizada con letrero, asistencia con equipaje y puntualidad garantizada para sus llegadas y salidas.' },
                excursion: { title: 'Excursiones Turísticas', desc: 'Circuitos personalizados para descubrir Marruecos (Marrakech, Ciudades Imperiales) con conductores expertos.' },
                events: { title: 'Eventos Especiales', desc: 'Servicio de alta gama para bodas, seminarios y conferencias. Transporte VIP para sus invitados distinguidos.' },
                disposal: { title: 'A Disposición', desc: 'Alquiler de vehículo con conductor por día o medio día para total flexibilidad.' },
                corporate: { title: 'Transporte Corporativo', desc: 'Soluciones de transporte para empresas, delegaciones y transporte de personal con facturación simplificada.' }
            },
            learnMore: 'Saber más'
        },
        fleet: {
            heading: 'Nuestra Flota',
            mainTitle: 'La <span class="text-secondary">Flota</span> de Excelencia',
            description: 'Descubra nuestros vehículos modernos y diversos, adaptados a todo tipo de misiones.',
            filters: { all: 'Todos', luxury: 'Lujo', tourism: 'Turismo', adventure: 'Aventura' },
            details: 'Detalles',
            capacityLabel: 'Capacidad',
            luggageLabel: 'Equipaje',
            featuresLabel: 'Especificaciones',
            placesUnit: 'Plazas',
            luggageUnit: 'Maletas',
            items: {
                berline: { name: 'Berlina de Lujo', desc: 'Mercedes Clase E o equivalente. Ideal para traslados VIP y transporte de negocios.' },
                van: { name: 'Van Premium', desc: 'Mercedes V-Class. Confort absoluto para pequeños grupos y familias.' },
                minibus: { name: 'Minibús Turístico', desc: 'Sprinter VIP acondicionado para el confort en largas distancias y excursiones.' },
                suv: { name: '4x4 Todo Terreno', desc: 'Toyota Land Cruiser / Prado. Para circuitos en el desierto y el Atlas.' }
            },
            vehicleFeatures: {
                wifi: 'WiFi',
                leather: 'Cuero',
                ac: 'AC',
                vip: 'VIP',
                space: 'Gran Espacio',
                modularity: 'Modularidad',
                family: 'Familiar',
                group: 'Transporte de Grupo',
                comfort: 'Confort Extra',
                fridge: 'Nevera',
                tv: 'TV',
                premium4x4: '4x4 Premium',
                offroad: 'Todo Terreno',
                atlas: 'Atlas/Desierto'
            }
        },
        booking: {
            title: 'RESERVA',
            gallery: 'Galería y Detalles',
            personalInfo: '1. Información Personal',
            tripDetails: '2. Detalles del viaje',
            firstName: 'Nombre',
            firstNamePH: 'Su nombre',
            lastName: 'Apellido',
            lastNamePH: 'Su apellido',
            departureCity: 'Ciudad de salida',
            departureCityPH: 'Ej: Marrakech',
            arrivalCity: 'Ciudad de llegada',
            arrivalCityPH: 'Ej: Casablanca',
            departureDate: 'Fecha de salida',
            departureDatePH: 'Elegir fecha',
            time: 'Hora',
            timePH: 'Hora',
            returnDate: 'Fecha de regreso',
            returnDatePH: 'Elegir fecha de regreso',
            optional: 'Opcional',
            whatsapp: 'Reservar por WhatsApp',
            email: 'Enviar solicitud por Correo',
            today: 'Hoy',
            selectDate: 'Elegir fecha'
        },
        testimonials: {
            heading: 'Lo que dicen nuestros clientes',
            subheading: 'La satisfacción de nuestros clientes es nuestra mejor tarjeta de visita.',
            items: [
                { name: 'Juan Perez', role: 'Viajero de Negocios', text: 'Servicio impecable. El conductor fue puntual y el coche muy cómodo. Lo recomiendo para cualquier viaje profesional.' },
                { name: 'Sara Garcia', role: 'Turista', text: 'Una experiencia inolvidable en Marruecos gracias a BM Transport. Nuestro conductor fue un excelente guía.' },
                { name: 'Carlos Ruiz', role: 'Organizador de Eventos', text: 'Gestión perfecta de los traslados para nuestro seminario. Flexibilidad y profesionalismo presentes.' }
            ]
        },
        contact: {
            subtitle: 'Contáctenos',
            heading: '¿Listo para comenzar su proyecto?',
            description: 'Contáctenos hoy para un presupuesto gratuito o cualquier solicitud de información. Nuestro equipo está a su disposición.',
            info: { phone: 'Teléfono', email: 'Correo', address: 'Sede Social', hours: 'Lunes - Sábado, 9h a 18h', response: 'Respuesta en 24h' },
            form: {
                title: 'Envíenos un mensaje',
                name: 'Nombre completo',
                namePH: 'Su nombre',
                email: 'Correo',
                emailPH: 'su@correo.com',
                subject: 'Asunto',
                subjects: ['Solicitud de presupuesto', 'Transporte turístico', 'A disposición', 'Otro'],
                message: 'Mensaje',
                messagePH: '¿Cómo podemos ayudarle?',
                send: 'Enviar mensaje',
                privacy: 'Al enviar este formulario, acepta nuestra política de privacidad.'
            }
        },
        footer: {
            description: 'Su socio de confianza para todas sus necesidades de transporte turístico y alquiler de lujo. Excelencia y seguridad en cada kilómetro.',
            quickLinks: 'Enlaces Rápidos',
            contact: 'Contáctenos',
            newsletter: { title: 'Boletín', text: 'Suscríbase para recibir nuestras noticias.', placeholder: 'Su correo', button: 'Suscribirse' },
            rights: 'Todos los derechos reservados.',
            privacy: 'Privacidad',
            legal: 'Aviso Legal'
        },
        fleetSection: {
            subtitle: 'Nuestra Colección',
            title: 'Flota Exclusiva',
            description: 'Descubra nuestra selección de vehículos de prestigio, que combinan confort absoluto, tecnología de punta y máxima seguridad.',
            seats: 'Plazas',
            luggage: 'Maletas',
            book: 'Reservar',
            features: {
                leather: 'Cuero Nappa',
                wifi: 'Wifi 5G',
                tablets: 'Tabletas',
                tinted: 'Cristales Tintados',
                ac: 'Climatización Tri-zona',
                vipLounge: 'Salón VIP',
                serenity: 'Serenidad Absoluta',
                premiumService: 'Servicio Premium',
                expertDriver: 'Conductor Experto',
                loungeConfig: 'Configuración Salón',
                centerTable: 'Mesa Central',
                ambientLight: 'Luz Ambiental',
                fridge: 'Nevera'
            }
        },
        legalPage: {
            title: "Menciones Legales",
            editorTitle: "1. Editor del Sitio",
            editorText: "El sitio <strong>BM Transport</strong> es editado por la empresa BM TRANSPORT, especializada en transporte turístico y alquiler de vehículos de lujo.",
            address: "Sede Social:",
            email: "Correo:",
            phone: "Teléfono:",
            legalForm: "Forma Jurídica:",
            hostingTitle: "2. Alojamiento",
            hostingText: "Este sitio está alojado por [Nombre del Host], [Dirección del Host].",
            ipTitle: "3. Propiedad Intelectual",
            ipText1: "Todo este sitio está sujeto a la legislación marroquí e internacional sobre derechos de autor y propiedad intelectual. Todos los derechos de reproducción están reservados, incluidos los documentos descargables y las representaciones iconográficas y fotográficas.",
            ipText2: "La reproducción total o parcial de este sitio en cualquier medio electrónico está estrictamente prohibida sin la autorización expresa del director de la publicación.",
            liabilityTitle: "4. Responsabilidad",
            liabilityText: "BM Transport se esfuerza por garantizar la exactitud y actualización de la información difundida en este sitio, cuyo contenido se reserva el derecho de corregir en cualquier momento y sin previo aviso.",
            copyright: "© 2026 BM Transport. Todos los derechos reservados."
        },
        privacyPage: {
            title: "Política de Privacidad",
            intro: "En BM Transport, damos una importancia capital a la privacidad de sus datos. Esta política detalla cómo recopilamos, utilizamos y protegemos su información personal.",
            collectionTitle: "1. Recopilación de Datos",
            collectionText: "Recopilamos la información que nos proporciona directamente cuando reserva un vehículo, solicita un presupuesto o se pone en contacto con nosotros. Esto incluye:",
            collectionList: ["Identidad (Nombre, Apellido)", "Datos de contacto (Correo, Teléfono)", "Detalles del viaje (Fechas, Lugares, Preferencias)"],
            usageTitle: "2. Uso de Datos",
            usageText: "Sus datos se utilizan exclusivamente para:",
            usageList: ["Procesar sus reservas y proporcionar nuestros servicios de transporte.", "Comunicarse con usted sobre su viaje.", "Mejorar nuestros servicios y su experiencia como cliente."],
            protectionTitle: "3. Protección de Datos",
            protectionText: "Implementamos estrictas medidas de seguridad para proteger su información contra el acceso no autorizado, modificación o divulgación. Sus datos nunca se venden a terceros.",
            rightsTitle: "4. Sus Derechos",
            rightsText: "De acuerdo con la legislación vigente, tiene derecho a acceder, rectificar y eliminar sus datos personales. Para ejercer este derecho, contáctenos a través de nuestro formulario de contacto.",
            update: "Última actualización: Febrero 2026"
        }
    }
};

export const TranslationProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr'); // Default to French

    const t = (key) => {
        const keys = key.split('.');
        let translation = translations[language];

        for (let i = 0; i < keys.length; i++) {
            if (translation && translation[keys[i]] !== undefined) {
                translation = translation[keys[i]];
            } else {
                // Fallback to English if translation doesn't exist
                let fallback = translations['en'];
                for (let j = 0; j < keys.length; j++) {
                    if (fallback && fallback[keys[j]] !== undefined) {
                        fallback = fallback[keys[j]];
                    } else {
                        return key; // Return the key if no translation is found
                    }
                }
                return fallback;
            }
        }

        return translation;
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <TranslationContext.Provider value={{ t, language, changeLanguage }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
};
