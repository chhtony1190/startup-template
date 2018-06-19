//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//<Document-Level>
//<ACRO_source>Initialisation</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:Initialisation ***********/
function Initialisation()

{
console.clear();
//On définit les tableaux en respectant l'arborescence des menus:
console.println("On définit les tableaux en respectant l'arborescence des menus.")
ListeN1=new Array();
ListeN2=new Array();
ListeN3=new Array();{}
//On définit les contenus des tableaux
//niveau 1
ListeN1=["Afrique","Europe","Amérique du Nord","Amérique du Sud","Asie","Moyen Orient"];
//Niveau 2, définition dans l'ordre de la liste de niveau 1
ListeN2[0]=["Algérie","Maroc","Tunisie","Lybie","Egypte","Soudan","Sénégal"];
ListeN2[1]=["France","Allemagne","Italie","Espagne","Belgique"];
ListeN2[2]=["USA","Canada","Mexique"];
ListeN2[3]=["Brésil","Chili"];
ListeN2[4]=["Chine","Vietnam","Inde","Malaisie","Japon","Birmanie"];
ListeN2[5]=["Iran","Irak","Turquie","Israël","Syrie","Liban"];
//Niveau 3 crétion des tables
indexContinent=0;
	while(indexContinent<ListeN1.length)
	{
	indexPays=0;
		while(indexPays<ListeN2[indexContinent].length)
		{
		ListeN3[indexContinent]=new Array();
		indexPays=indexPays+1;
		}
	indexContinent=indexContinent+1;
	}
//Niveau 3 suite, définition dans l'ordre des niveaux 1 et 2 respectivement:
//Afrique
ListeN3[0][0]=["Alger","Constantine","Sétif","Oran","Annaba"];
ListeN3[0][1]=["Casablanca","Tanger","Agadir","Marakech","Fez"];
ListeN3[0][2]=["Tunis","Hammamet"];
ListeN3[0][3]=["Tripoli","Benghazi","Misratah","Homs","Tobrouk"];
ListeN3[0][4]=["Le Caire","Alexandrie","Port SaÏd","Rafah","Suez"];
//Europe
ListeN3[1][0]=["Paris","Marseille","Strasbourg","Bordeaux","Lille","Toulouse","Lyon"];
ListeN3[1][1]=["Berlin","Hambourg","Munich","Frankfort","Bonn","Dusseldorf","Brême"];
ListeN3[1][2]=["Rome","Milan","Venise","Turin","Palerme","Côme","Ravenne","Bologne"];
ListeN3[1][3]=["Madrid","Barcelone","Bilbao","Burgos","Valence","Tolède","Huelva","Figueras"];
//Amérique du Nord
ListeN3[2][0]=["New-York","Dallas","Washington","Chicago","Los Angeles","Houston"];
ListeN3[2][1]=["Montreal","Toronto","Ottawa"];
ListeN3[2][2]=["Mexico"];
//
//Remplissage de la liste de niveau 1 (sélecteur de niveau supérieur)
this.getField("ListeNiveau1").clearItems();
indexContinent=0;
	while(indexContinent<ListeN1.length)
	{
	this.getField("ListeNiveau1").insertItemAt(ListeN1[indexContinent],indexContinent,indexContinent)
	indexContinent=indexContinent+1;
	}
//Fin remplissage Liste mère
//Reset des menus secondaires
ffille=this.getField("ListeNiveau2");
ffille.clearItems();
fpfille=this.getField("ListeNiveau3");
fpfille.clearItems();
}






















//</ACRO_script>
//</Document-Level>

//<Document-Level>
//<ACRO_source>RemplissageFille</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:RemplissageFille ***********/

function RemplissageFille()
{
console.clear();
//Nom du sélecteur solliscité:
NomSelecteur=event.target.name;
console.println("Sélecteur activé:"+NomSelecteur)
ffille=this.getField("ListeNiveau2");
ffille.delay=true;
console.println("Remplissage liste fille");
ffille=this.getField("ListeNiveau2");
ffille.clearItems();
fpfille=this.getField("ListeNiveau3");
fpfille.clearItems();
indexPays=0;
 while(indexPays<ListeN2[event.changeEx].length)
 {
 console.println("Remplissage liste fille index="+indexPays+" par "+ListeN2[event.changeEx][indexPays]);
 ffille.insertItemAt(ListeN2[event.changeEx][indexPays],indexPays,indexPays)
 indexPays=indexPays+1;
 }
ffille.currentValueIndices=0;
ffille.delay=false;
console.println("Remplissage liste fille. Fin.");
}
























//</ACRO_script>
//</Document-Level>

//<Document-Level>
//<ACRO_source>RemplissagePetiteFille</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:RemplissagePetiteFille ***********/
function RemplissagePetiteFille()
{
console.println("Remplissage liste petite fille");
NomSelecteur=event.target.name;
console.println("Sélecteur activé:"+NomSelecteur)
fpfille=this.getField("ListeNiveau3");
fpfille.delay=true;
fpfille.clearItems();
indexVille=0;
selectionN1=this.getField("ListeNiveau1").value;
 while(indexVille<ListeN3[selectionN1][event.changeEx].length)
 {
 console.println("Remplissage liste petite fille index="+indexVille+" par "+ListeN3[selectionN1][event.changeEx][indexVille]);
 fpfille.insertItemAt(ListeN3[selectionN1][event.changeEx][indexVille],indexVille,indexVille)
 indexVille=indexVille+1;
 }
fpfille.currentValueIndices=0;
fpfille.delay=false;
console.println("Remplissage liste petite fille.fin.");
}









//</ACRO_script>
//</Document-Level>

//<Page-Actions>
//<ACRO_source>Page1:Page Open:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: Page-Actions:Page1:Page Open:Action1 ***********/
//Script de définition des tables...
Initialisation();


//</ACRO_script>
//</Page-Actions>

//<AcroForm>
//<ACRO_source>Init:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Init:Annot1:MouseUp:Action1 ***********/
Initialisation();

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ListeNiveau1:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ListeNiveau1:Keystroke ***********/

//Remplissage du second menu déroulant
if(!event.willCommit)
{
RemplissageFille();
}











//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ListeNiveau2:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ListeNiveau2:Keystroke ***********/
//Remplissage du troisième menu déroulant
if(!event.willCommit)
{
RemplissagePetiteFille();
}

//</ACRO_script>
//</AcroForm>
