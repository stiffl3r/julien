// ETAPE 1: DECLARATION DES VARIABLES
var form 		= {};
form.somme 		= 0;	// somme a distribuer
form.nbBillets 	= 0;
// ETAPE 2: DECLARATION DES FONCTIONS
form.demarrage = function ()
{
	alert('PRET');
	// INSTALLATION DES EVENEMENTS "ON CLICK"
	jQuery(".boutonRetrait").on("click", form.retirerBillets);
};

form.retirerBillets = function ()
{
	alert("tu as clique");
	// RECUPERER LA SOMME DEMANDEE
	form.somme = jQuery("input#retrait").val();
	alert("MONTANT DU RETRAIT: " + form.somme);
	
	// CALCUL DU NOMBRE DE BILLETS A DISTRIBUER
	// ARRONDI A ENTIER INFERIEUR
	form.nbBillets = Math.floor(form.somme / 100);
	compteur = 0;
	// EFFACER LES BILLETS
	jQuery(".resultat").html("");
	while (compteur < form.nbBillets)
	{
		// AFFICHER LES BILLETS
		html100 = '<img src="media/images/euros-100.jpg">';
		jQuery(".resultat").append(html100);
		
		// AJOUTER UN AU COMPTEUR
		compteur = compteur + 1;
	}	 
	
};

// ETAPE 3: ACTIVATION DU CODE
jQuery(form.demarrage);