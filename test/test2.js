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
//console.show();
//On définit les tableaux en respectant l'arborescence des menus:
console.println("On définit les tableaux en respectant l'arborescence des menus.")
ListeN1=new Array();
ListeN2=new Array();
ListeN3=new Array();
//On définit les contenus des tableaux
//niveau 1
ListeN1=["Choisissez un élément","7-18.00 (Soutien)","8-12.00 (Professionnel)","5-12.00 (Enseignant)"];
//Niveau 2, définition dans l'ordre de la liste de niveau 1
ListeN2["Choisissez un élément"]=[" "];
ListeN2["7-18.00 (Soutien)"]=["2 ans","3 ans","4 ans","5 ans"];
ListeN2["8-12.00 (Professionnel)"]=["2 ans","3 ans","4 ans","5 ans"];
ListeN2["5-12.00 (Enseignant)"]=["2 ans","3 ans","4 ans","5 ans"];
//Niveau 3 crétion des tables
//Niveau 3 suite, définition dans l'ordre des niveaux 1 et 2 respectivement:
//7-18.00 (Soutien)
ListeN3["7-18.00 (Soutien)"]=new Array();
ListeN3["7-18.00 (Soutien)"]["2 ans"]=["75,00 %","70,83 %"];
ListeN3["7-18.00 (Soutien)"]["3 ans"]=["83,33 %","80,56 %","77,78 %","75,00 %","72,22 %"];
ListeN3["7-18.00 (Soutien)"]["4 ans"]=["87,50 %","85,42 %","83,33 %","81,25 %","79,17 %","77,08 %","75,00 %"];
ListeN3["7-18.00 (Soutien)"]["5 ans"]=["90,00 %","88,33 %","86,67 %","85,00 %","83,33 %","81,67 %","80,00 %"];
//8-12.00 (Professionnel)
ListeN3["8-12.00 (Professionnel)"]=new Array();
ListeN3["8-12.00 (Professionnel)"]["2 ans"]=["75,00 %","70,83 %","66,67 %"];
ListeN3["8-12.00 (Professionnel)"]["3 ans"]=["83,33 %","80,56 %","77,78 %","75,00 %","72,22 %","69,44 %","66,67 %"];
ListeN3["8-12.00 (Professionnel)"]["4 ans"]=["87,50 %","85,42 %","83,33 %","81,25 %","79,17 %","77,08 %","75,00 %"];
ListeN3["8-12.00 (Professionnel)"]["5 ans"]=["90,00 %","88,33 %","86,67 %","85,00 %","83,33 %","81,67 %","80,00 %"];
//5-12.00 (Enseignant)
ListeN3["5-12.00 (Enseignant)"]=new Array();
ListeN3["5-12.00 (Enseignant)"]["2 ans"]=["75,00 %"];
ListeN3["5-12.00 (Enseignant)"]["3 ans"]=["83,33 %","66,67 %"];
ListeN3["5-12.00 (Enseignant)"]["4 ans"]=["87,50 %","75,00 %"];
ListeN3["5-12.00 (Enseignant)"]["5 ans"]=["90,00 %","80,00 %"];
//
//Remplissage de la liste de niveau 1 (sélecteur de niveau supérieur)
console.println("Remplissage menus 1.")
this.getField("ListeNiveau1").clearItems();
indexContinent=0;
	while(indexContinent<ListeN1.length)
	{
	this.getField("ListeNiveau1").insertItemAt(ListeN1[indexContinent],ListeN1[indexContinent],indexContinent)
	indexContinent=indexContinent+1;
	}
//Fin remplissage Liste mère
//Reset des menus secondaires
console.println("Reset des menus 2 et 3.")
ffille=this.getField("ListeNiveau2");
ffille.clearItems();
fpfille=this.getField("ListeNiveau3");
fpfille.clearItems();
console.println("On définit les tableaux en respectant l'arborescence des menus.Fin")

}













































//</ACRO_script>
//</Document-Level>

//<Document-Level>
//<ACRO_source>RemplissageFille</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:RemplissageFille ***********/

function RemplissageFille()
{
console.println("*******************************");
console.println("Remplissage liste fille");
//Nom du sélecteur solliscité:
NomSelecteur=event.target.name;
console.println("Sélecteur activé:"+NomSelecteur)
ffille=this.getField("ListeNiveau2");
ffille.delay=true;
ffille=this.getField("ListeNiveau2");
ffille.clearItems();
fpfille=this.getField("ListeNiveau3");
fpfille.clearItems();
indexPays=0;
//console.println("Remplissage liste fille. event.change="+event.change);
//console.println("Remplissage liste fille. event.changeEx="+event.changeEx);
	try
	{
	 while(indexPays<ListeN2[event.changeEx].length)
	 {
	 console.println("Remplissage liste fille index="+indexPays+" par "+ListeN2[event.changeEx][indexPays]);
	 ffille.insertItemAt(ListeN2[event.changeEx][indexPays],ListeN2[event.changeEx][indexPays],indexPays)
	 indexPays=indexPays+1;
	 }
	ffille.currentValueIndices=0;
	ffille.delay=false;
	}
	catch(e)
	{
	app.alert("Liste fille "+event.changeEx+" non définie!",1);
	console.println("Liste fille  "+event.changeEx+" non définie!");
	}
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
console.println("*******************************");
console.println("Remplissage liste petite fille");
NomSelecteur=event.target.name;
console.println("Sélecteur activé:"+NomSelecteur)
fpfille=this.getField("ListeNiveau3");
fpfille.delay=true;
fpfille.clearItems();
indexVille=0;
selectionN1=this.getField("ListeNiveau1").value;
console.println("Remplissage liste petite fille.SélectionN1= "+selectionN1+" et event.changeEx= "+event.changeEx);
	try
	{
	console.println("Longueur liste petite fille="+ListeN3[selectionN1][event.changeEx].length);
	 while(indexVille<ListeN3[selectionN1][event.changeEx].length)
	 {
	 console.println("Remplissage liste petite fille index="+indexVille+" par "+ListeN3[selectionN1][event.changeEx][indexVille]);
	 fpfille.insertItemAt(ListeN3[selectionN1][event.changeEx][indexVille],ListeN3[selectionN1][event.changeEx][indexVille],indexVille)
	 indexVille=indexVille+1;
	 }
	fpfille.currentValueIndices=0;
	fpfille.delay=false;
	}
	catch(e)
	{
	app.alert("Liste petite fille "+event.changeEx+" non définie!",1)
	console.println("Liste petite fille "+event.changeEx+" non définie!");
	}
console.println("Remplissage liste petite fille.fin.");
}






















//</ACRO_script>
//</Document-Level>

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
//<ACRO_source>ListeNiveau3:Keystroke</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ListeNiveau3:Keystroke ***********/
//Remplissage du troisième menu déroulant
if(!event.willCommit)
{
RemplissagePetiteFille();
}

//</ACRO_script>
//</AcroForm>
