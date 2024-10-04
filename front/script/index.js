document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.icon-elipse-slide img');
    const mainImage = document.getElementById('mainImage');
    const mainTitle = document.getElementById('mainTitle');
    const mainText = document.getElementById('mainText');

    const sectionsData = [
        {
            imgSrc: './front/assets/OBJECT3.png',
            title: 'Webontwikkeling en Maatwerk Applicaties',
            text: 'Wij bieden diensten aan op het gebied van webontwikkeling en maatwerkapplicaties, ontworpen om aan uw zakelijke behoeften te voldoen. Van dynamische websites tot complete webapplicatie-oplossingen, wij helpen u uw ideeën naar de digitale wereld te brengen met kwaliteit en efficiëntie. Geef uw bedrijf een boost met geavanceerde technologie!'
        },
        {
            imgSrc: './front/assets/objeto-4-copia-copia.png',
            title: 'Grafische Ontwerpdiensten',
            text: 'Onze grafische ontwerpdiensten zijn geëlaboreerd voor organisaties te helpen visueel op te vallen en hun boodschap effectief over te brengen. Van het creëren van een sterke en consistente merkidentiteit tot het ontwerpen van gedrukte en digitale marketingmaterialen, wij bieden integrale oplossingen die merkherkenning en gebruikersinteractie stimuleren.'
        },
        {
            imgSrc: './front/assets/Objeto-2.png',
            title: 'Community Manager Diensten',
            text: 'Onze Community Manager diensten zijn ontworpen om organisaties te helpen bij het opbouwen en onderhouden van een actieve en betrokken online gemeenschap. Van contentcreatie en -planning tot crisisbeheer en prestatieanalyse, wij bieden integrale oplossingen die de merkbekendheid versterken en de interactie met volgers bevorderen.'
        },
        {
            imgSrc: './front/assets/objeto-5.png',
            title: 'SEO en SEM Diensten',
            text: 'Onze SEO en SEM diensten zijn gepland voor organisaties te helpen hun online aanwezigheid te verbeteren en hoogwaardig verkeer aan te trekken. Van zoekmachineoptimalisatie en het beheer van betaalde advertentiecampagnes tot gedetailleerde prestatieanalyse, bieden wij uitgebreide oplossingen die de groei en zichtbaarheid van uw merk stimuleren.'
        },
        {
            imgSrc: './front/assets/objeto-6.png',
            title: 'Database en Data-analyseservices',
            text: 'Onze database- en data-analyseservices zijn ontwikkeld voor organisaties te versterken door ruwe gegevens om te zetten in bruikbare inzichten. Van efficiënt databasemanagement en veilige gegevensopslag tot geavanceerde data-analyse en visualisatie, wij bieden end-to-end oplossingen die weloverwogen besluitvorming en strategische groei stimuleren.'
        }
    ];

    let currentIndex = 0;
    let autoSlideInterval;

    // Función para precargar imágenes
    function preloadImages(imageUrls) {
        return Promise.all(imageUrls.map(url => {
            return new Promise(resolve => {
                const img = new Image();
                img.src = url;
                img.onload = resolve;
                img.onerror = resolve; // Resolver incluso si la imagen falla al cargar
            });
        }));
    }

    // Precargar todas las imágenes de sectionsData
    preloadImages(sectionsData.map(section => section.imgSrc)).then(() => {
        console.log('All images have been preloaded.');
    });

    function updateContent(index) {
        if (currentIndex === index) return;

        const direction = index < currentIndex ? 'slide-in-left' : 'slide-in-right';
        currentIndex = index;

        mainImage.classList.add('hidden');
        mainTitle.classList.add('hidden');
        mainText.classList.add('hidden');

        // Remover clase active de todos los círculos
        circles.forEach(circle => circle.classList.remove('active'));

        setTimeout(() => {
            mainImage.src = sectionsData[index].imgSrc;
            mainTitle.textContent = sectionsData[index].title;
            mainText.textContent = sectionsData[index].text;

            mainImage.classList.remove('hidden');
            mainTitle.classList.remove('hidden');
            mainText.classList.remove('hidden');

            mainImage.classList.add(direction);
            mainTitle.classList.add(direction);
            mainText.classList.add(direction);

            // Aplicar clase active al círculo correspondiente
            circles[index].classList.add('active');

            setTimeout(() => {
                mainImage.classList.remove(direction);
                mainTitle.classList.remove(direction);
                mainText.classList.remove(direction);
            }, 500); // Duración de la animación
        }, 500);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % sectionsData.length;
            updateContent(nextIndex);
        }, 20000); // Cambia cada 20 segundos (10000 milisegundos)
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function handleTouchStart(event) {
        stopAutoSlide();
    }

    function handleTouchEnd(event) {
        const touchStartX = event.changedTouches[0].clientX;
        const touchEndX = event.changedTouches[0].clientX;
        
        if (touchEndX < touchStartX) {
            const nextIndex = (currentIndex + 1) % sectionsData.length;
            updateContent(nextIndex);
        } else if (touchEndX > touchStartX) {
            const nextIndex = currentIndex === 0 ? sectionsData.length - 1 : currentIndex - 1;
            updateContent(nextIndex);
        }

        startAutoSlide(); // Reanudar el deslizamiento automático después del gesto táctil
    }

    circles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            stopAutoSlide();
            updateContent(index);
        });

        // Eventos táctiles
        circle.addEventListener('touchstart', handleTouchStart, false);
        circle.addEventListener('touchend', handleTouchEnd, false);

        // Eventos de mouse
        circle.addEventListener('mouseover', () => {
            stopAutoSlide();
            updateContent(index);
        });
    });

    // Iniciar el deslizamiento automático al cargar la página
    startAutoSlide();
});

document.addEventListener('DOMContentLoaded', function () {
    const circles2 = document.querySelectorAll('.icon-elipse-slide-2 img'); // Cambio de nombre para evitar conflicto con la primera sección
    const mainImage2 = document.getElementById('mainImage2');
    const mainTitle2 = document.getElementById('mainTitle2');
    const mainText2 = document.getElementById('mainText2');

    const sectionsData2 = [
        {
            imgSrc: './front/assets/start4-basedatos.png',
            title: 'Premium Gegeven sopslagoplossing',
            text: 'Onze premium opslagoplossing biedt veiligheid, efficiëntie en toegankelijkheid om aan uw meest veeleisende behoeften te voldoen, van cloudopslag tot schaalbare databases en veilige back-ups. Met geavanceerde technologie en persoonlijke ondersteuning garanderen wij dat uw bedrijfsinformatie altijd beschermd en geoptimaliseerd is.'
        },
        {
            imgSrc: './front/assets/start4planeta.png',
            title: 'Uw Website Beschikbaar 24/7',
            text: 'Wij zijn toegewijd aan het behouden van de connectiviteit van uw website 24 uur per dag, 7 dagen per week. Onze focus ligt op het waarborgen dat uw website altijd beschikbaar en toegankelijk is voor uw bezoekers en klanten. We maken gebruik van geavanceerde technologie en een voortdurende toewijding om de snelheid en betrouwbaarheid van uw internetverbinding te optimaliseren. Vertrouw op ons om ervoor te zorgen dat uw online aanwezigheid optimaal functioneert, zodat u zich volledig kunt concentreren op uw bedrijf.'
        },
        {
            imgSrc: './front/assets/start4-triangulo.png',
            title: 'Geoptimaliseerd Bedrijfsbeheer',
            text: 'Ons professionele doel is om elk aspect van uw operatie te optimaliseren met behulp van innovatieve strategieën en geavanceerde technologie. We zijn toegewijd aan het bieden van effectieve en op maat gemaakte oplossingen die de efficiëntie en groei van uw bedrijf stimuleren, met een volledige focus op het bereiken van uw doelen en doelstellingen. Wij zijn uw beste keuze om het management van uw bedrijf naar een hoger niveau te tillen.'
        },
        {
            imgSrc: './front/assets/logo-start4.png',
            title: 'Webdesign dat Uw Bedrijf naar een Hoger Niveau Tilt',
            text: 'Ons doel als specialisten in webdesign is om uw bedrijf naar een hoger niveau te tillen door het creëren van visueel aantrekkelijke, functionele websites die zijn aangepast aan uw specifieke behoeften. We maken gebruik van de nieuwste trends en technologieën in webdesign om ervoor te zorgen dat uw online aanwezigheid opvalt en uw doelgroep aantrekt. Transformeer uw visie in een digitale realiteit die de groei en innovatie van uw bedrijf stimuleert.'
        },
    ];

    let currentIndex2 = 0;
    let autoSlideInterval2;

    // Función para precargar imágenes
    function preloadImages(imageUrls) {
        return Promise.all(imageUrls.map(url => {
            return new Promise(resolve => {
                const img = new Image();
                img.src = url;
                img.onload = resolve;
                img.onerror = resolve; // Resolver incluso si la imagen falla al cargar
            });
        }));
    }

    // Precargar todas las imágenes de sectionsData2
    preloadImages(sectionsData2.map(section => section.imgSrc)).then(() => {
        console.log('All images have been preloaded.');
    });

    function updateContent2(index) {
        if (currentIndex2 === index) return;

        const direction2 = index < currentIndex2 ? 'slide-in-left' : 'slide-in-right';
        currentIndex2 = index;

        mainImage2.classList.add('hidden');
        mainTitle2.classList.add('hidden');
        mainText2.classList.add('hidden');

        // Remover clase active de todos los círculos
        circles2.forEach(circle => circle.classList.remove('active'));

        setTimeout(() => {
            mainImage2.src = sectionsData2[index].imgSrc;
            mainTitle2.textContent = sectionsData2[index].title;
            mainText2.textContent = sectionsData2[index].text;

            mainImage2.classList.remove('hidden');
            mainTitle2.classList.remove('hidden');
            mainText2.classList.remove('hidden');

            mainImage2.classList.add(direction2); // Corregido el nombre de la variable direction2
            mainTitle2.classList.add(direction2);
            mainText2.classList.add(direction2);

            // Aplicar clase active al círculo correspondiente
            circles2[index].classList.add('active');

            setTimeout(() => {
                mainImage2.classList.remove(direction2);
                mainTitle2.classList.remove(direction2);
                mainText2.classList.remove(direction2);
            }, 500); // Duración de la animación
        }, 500);
    }

    function startAutoSlide2() {
        autoSlideInterval2 = setInterval(() => {
            const nextIndex2 = (currentIndex2 + 1) % sectionsData2.length;
            updateContent2(nextIndex2);
        }, 20000); // Cambia cada 20 segundos (10000 milisegundos)
    }

    function stopAutoSlide2() {
        clearInterval(autoSlideInterval2);
    }

    function handleTouchStart2(event) {
        stopAutoSlide2();
    }

    function handleTouchEnd2(event) {
        const touchStartX2 = event.changedTouches[0].clientX;
        const touchEndX2 = event.changedTouches[0].clientX;
        
        if (touchEndX2 < touchStartX2) {
            const nextIndex2 = (currentIndex2 + 1) % sectionsData2.length;
            updateContent2(nextIndex2);
        } else if (touchEndX2 > touchStartX2) {
            const nextIndex2 = currentIndex2 === 0 ? sectionsData2.length - 1 : currentIndex2 - 1;
            updateContent2(nextIndex2);
        }

        startAutoSlide2(); // Reanudar el deslizamiento automático después del gesto táctil
    }

    circles2.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            stopAutoSlide2();
            updateContent2(index);
        });

        // Eventos táctiles
        circle.addEventListener('touchstart', handleTouchStart2, false);
        circle.addEventListener('touchend', handleTouchEnd2, false);

        // Eventos de mouse
        circle.addEventListener('mouseover', () => {
            stopAutoSlide2();
            updateContent2(index);
        });
    });

    // Iniciar el deslizamiento automático al cargar la página
    startAutoSlide2();
});

