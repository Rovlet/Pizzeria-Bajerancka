CREATE TABLE Menu (
	id_dania INT PRIMARY KEY AUTO_INCREMENT,
    nazwa_dania VARCHAR(255),
	kategoria_dania VARCHAR(255),
	cena_dania DECIMAL(5,2),
	czas_przygotowywania INT
);

CREATE TABLE Magazyn_Skladniki (
	id_skladnika CHAR PRIMARY KEY,
	nazwa_skladnika VARCHAR(255),
	posiadana_ilosc DECIMAL(5,2),
	data_waznosci DATE
);

CREATE TABLE Pracownicy (
	id_pracownika INT PRIMARY KEY AUTO_INCREMENT,
	imie_pracownika VARCHAR(255),
	nazwisko_pracownika VARCHAR(255),
	stanowisko_pracownika VARCHAR(255),
	data_zatrudnienia DATE
);

CREATE TABLE Klienci (
	id_klienta INT PRIMARY KEY AUTO_INCREMENT,
	imie_klienta VARCHAR(255),
	nazwisko_klienta VARCHAR(255),
	telefon_klienta INT,
	email_klienta VARCHAR(255),
	miasto_klienta VARCHAR(255),
	ulica_klienta VARCHAR(255),
	numer_domu_klienta INT,
	numer_lokalu_klienta INT,
	kod_pocztowy_klienta VARCHAR(20)
);

CREATE TABLE Zamowienia(
	id_zamowienia CHAR PRIMARY KEY,
	id_klienta CHAR,
	data_zamowienia TIMESTAMP DEFAULT NOW(),
	typ_zamowienia VARCHAR(255),
	koszt_zamowienia DECIMAL(5,2),
	metoda_platnosci VARCHAR(255)
);

CREATE TABLE Join_zamowienia (
	id_zamowienia CHAR,
	id_dania CHAR,
	id_zasobu CHAR,
	id_pracownika CHAR
);

CREATE TABLE Sledzenie (
	id_zamowienia CHAR,
	czas_dostawy INT
);

INSERT INTO Menu (nazwa_dania, kategoria_dania, cena_dania, czas_przygotowywania) VALUES('Margarita', 'Pizza', 15, 20), ('Capriciosa', 'Pizza', 19, 25), ('Hawajska', 'Pizza', 20, 25), ('Parma', 'Pizza', 23, 25), ('Quattro Formaggi', 'Pizza', 22, 20), ('Quattro Stagioni', 'Pizza', 25, 25), ('Polska', 'Pizza', 23, 25), ('Tonno', 'Pizza', 23, 25), ('Calzone', 'Pizza', 23, 25), ('Romana', 'Pizza', 23, 25);

