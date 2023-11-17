function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.44520952707412, lng: 35.01270913973144},
        zoom: 12,
        styles: [
            {
                featureType: 'poi',
                stylers: [{ visibility: 'off' }] 
            }
        ]
    });

    map.markers = [];
    let markers = [
        {lat: 48.46486891057286, lng: 35.01661416749056, title: 'Точка 1', content: 'UNDERGROUND dnepr <br> Часи роботи: чт 10-14, сб 10-14 <br> Місцехнаходження: вулиця Філософська, Дніпро, Дніпропетровська область, Україна, 49000<br> Телефон: 0982426887<br>  Пластик, папір, тетра-пак, поліетилен, альюмінієві бляшанки, кришечки'},
        {lat: 48.468353715865675, lng: 35.019045640507485, title: 'Точка 2', content: 'UNDERGROUND s PRECIOUS PLASTIC <br>Часи роботи: Четвер і суботу з 10.00 до 14.00<br> Місцехнаходження: вулиця Філософська, 19а, Дніпро, Дніпропетровська область, Україна, 49000<br> Телефон: 0982426887<br> метал, пластик, папір, Скло, тетра-пак, поліетилен, альюмінієві бляшанки, кришечки'},
        {lat: 48.47672176931155, lng: 35.02299698283529, title: 'Точка 3', content: 'Пункт прийому вторсировини<br>Часи роботи: Пн - вихідний; Вт-сб 8:00 - 16:00; Нд 8:00 - 14:00 <br> Місцехнаходження: м. Дніпро, вул. Василя Чапленка, 21 <br> Телефон: +380503201336 <br> Пластик, папір, поліетилен, альюмінієві бляшанки'},
        {lat: 48.45801467740341, lng: 35.01860455585169, title: 'Точка 4', content: 'ВТОРМА 2<br>Часи роботи: Пн-Пт, з 8:00 до 17:00<br> Місцехнаходження: вулиця Миколи Руденка, 53, Дніпро, Дніпропетровська область, Україна, 49000<br> Телефон: +380504212026<br> Папір'},
        {lat: 48.44934329157782, lng: 35.05088724050681, title: 'Точка 5', content: 'Пункт прийому вторсировини<br>Часи роботи: Пн-Нд з 8:00 до 19:00<br> Місцехнаходження: Біологічний провулок, 8, Дніпро, Дніпропетровська область, Україна, 49000<br> Телефон: 0662708655<br> Метал, пластик, алюмінієві бляшанки, кришечки, інше'},
        {lat: 48.456880890428664, lng: 34.97204545399847, title: 'Точка 6', content: 'Втормет<br>Часи роботи: Пн-Пт 09:00–17:00, обід 13:00–13:30; Сб 09:00–14:00. <br> Місцехнаходження: проспект Металургів, 2д, Дніпро, Дніпропетровська область, Україна, 49000<br> Телефон: +380 (56) 736‒31‒19<br>  Метал, пластик, папір, альюмінієві бляшанки, електронні відходи, пластик'},
        {lat: 48.39153668009626, lng: 35.03667262701346, title: 'Точка 7', content: 'Пункт прийому вторсировини<br>Часи роботи: Пн-Пт 08:00-17:00 <br> Місцехнаходження: вулиця Панікахи, 97, Дніпро, Дніпропетровська область, Україна, 49000<br> Телефон: (050) 421-20-26<br> Пластик, папір, скло, поліетилен'},
        {lat: 48.405795440716595, lng: 35.03143539632486, title: 'Точка 8', content: 'UNDERGROUND<br>Часи роботи: кожну неділю 10.00-12.00<br> Місцехнаходження: Запорізьке шосе, 56, Дніпро, Дніпропетровська область, Україна, 49000<br> Телефон: 0000000000<br> Пластик Папір Скло Поліетилен Альюмінієві бляшанки Кришечки Інше '},
        {lat: 48.43562543665817, lng: 35.125960214044234, title: 'Точка 9', content: 'ECOLOGYUA<br>Часи роботи: Пн-Нд 08:00-17:00<br> Місцехнаходження: вулиця Виробнича, 3, Дніпро́, Дніпропетровська область, Україна, 49127<br> Телефон: (096) 106-05-05 , (050) 106-05-05 , (073) 106-05-05 <br> Пластик, папір, поліетилен, '},
        {lat: 48.434857555233336, lng: 35.128898827014716, title: 'Точка 10', content: 'Вторма 2<br>Часи роботи: цілодобово<br> Місцехнаходження: вулиця Виробнича, 6, Дніпро, Дніпропетровська область, Україна, 49000<br> Телефон: +380504212026<br> Папір'},
        {lat: 48.50714158326885, lng: 35.09573254236138, title: 'Точка 11', content: 'Пункт прийому вторсировини<br>Часи роботи: Пн-Пт 08:00-18:00<br> Місцехнаходження: вулиця Журналістів, 7, Дніпро, Дніпропетровська область, Україна, 49000<br> Телефон: (067) 632-82-82<br> Метал'},
        

    ];
    
    let customMarkerImage = 'marker.svg';
    markers.forEach(function(markerInfo) {
        var marker = new google.maps.Marker({
            position: {lat: markerInfo.lat, lng: markerInfo.lng},
            map: map,
            title: markerInfo.title,
            icon: customMarkerImage,
        });

        marker.content = markerInfo.content;

        map.markers.push(marker);
        let infowindow = new google.maps.InfoWindow({
            content: '<div class="info-window">' + markerInfo.content + '</div>'
        });
            

        marker.addListener('click', function() {
            let infowindow = new google.maps.InfoWindow({
                content: '<div id="info-window-content">' + markerInfo.content + '</div>'
            });
        
            infowindow.open(map, marker);
        
            
            google.maps.event.addListenerOnce(infowindow, 'domready', function() {
                let infoWindowDiv = document.getElementById('info-window-content');
                infoWindowDiv.style.backgroundColor = '#fff';
                infoWindowDiv.style.color = '#333';
                infoWindowDiv.style.fontFamily = 'Arial, sans-serif';
                infoWindowDiv.style.fontSize = '14px';
                infoWindowDiv.style.padding = '10px';
                infoWindowDiv.style.borderRadius = '5px';
                infoWindowDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
                infoWindowDiv.style.maxWidth = '350px';
        
               
            });
        });
    });

    function filterMarkersByTrashType(trashType) {
        map.markers.forEach(function(marker) {
            if (marker.content && typeof marker.content === 'string') {
                let markerContent = marker.content.toLowerCase(); 
                let trashTypeLowerCase = trashType.toLowerCase();
    
                if (markerContent.includes(trashTypeLowerCase)) {
                    marker.setVisible(true);
                } else {
                    marker.setVisible(false);
                }
            } else {
                
                console.error('Свойство content отсутствует или не является строкой для маркера', marker);
            }
        });
    }
    

   
    let trashSelect = document.createElement('select');
    trashSelect.innerHTML = '<option value="">Выберите тип мусора</option>' +
                            '<option value="пластик">Пластик</option>' +
                            '<option value="папір">Папір</option>' +
                            '<option value="скло">Скло</option>' +
                            '<option value="метал">Метал</option>' +
                            '<option value="інше">Інше</option>';

    
    trashSelect.addEventListener('change', function() {
        let selectedTrashType = this.value;
        filterMarkersByTrashType(selectedTrashType);
    });

    
    let controlDiv = document.createElement('div');
    controlDiv.appendChild(trashSelect);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlDiv);

    trashSelect.style.display = 'flex'; 
trashSelect.style.background = '#fff'; 
trashSelect.style.padding = '16px'; 
trashSelect.style.fontSize = '18px'; 
trashSelect.style.lineHeight = '21px'; 
trashSelect.style.letterSpacing = '0.03em'; 
trashSelect.style.border = '2px solid #E0E0E0'; 
trashSelect.style.margin = '5px'; 
trashSelect.style.alignItems = 'center';





}
