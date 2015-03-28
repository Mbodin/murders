
var numberMenu = 0; // numéro automatique
var EM = "ms"; // menu vers d'autres pages
var IM = "mp"; // menu internes à la page en cours

function _SetLine(p, name, link) {
return "<tr><td class=\"" + p + "_cells\" onmouseover=\"javascript:this.className='" + p + "_cells_over'\"  onmouseout=\"javascript:this.className='" + p + "_cells'\"" + (link ? " onclick=\"javascript:document.location='" + link + "'\"" : "") + ">" + name + "<\/td><\/tr>"; }

function _Set(p, menu) {
return "<table cellpadding=0 cellspacing=0 border=0><tr><td class='ms_t' colspan=3>&nbsp;<\/td><\/tr><tr><td class='" + p + "_l'>&nbsp;<\/td><td class='" + p + "_body'><table width='100%'>" + menu + "<\/table><\/td><td class='" + p + "_r'>&nbsp;<\/td><\/tr><tr><td class='ms_b' colspan=3>&nbsp;<\/td><\/tr><\/table>"; }

// menu haut
function menuSetLine(name, link) { return _SetLine("ms", name, link); }
function menuSet(name, link, menu) { numberMenu ++;
document.writeln("<td class='m_cells' onmouseover='javascript:show(" + numberMenu + ")' onmouseout='javascript:hide(" + numberMenu + ")' valign='top'><div style='height:26px; text-align:center'" + (link ? " onclick='javascript:document.location=\"" + link + "\"'" : "") + ">" + name + 
"<\/div><div class='ms_class' id='ms" + numberMenu + "'>" + _Set("ms", menu) + "<\/div><\/td>"); }

function menuSetNull() { return "<tr><td class=\"ms_cells_null\"><\/td><\/tr>"; }
function show(n) { document.getElementById("ms" + n).style.visibility = 'visible'; }
function hide(n) { document.getElementById("ms" + n).style.visibility = 'hidden' ; }

// menu gauche
function pageSetLine(p, name, link) { return _SetLine(p, name, link); }
function pageSet(p, menu) { document.writeln(_Set(p, menu)); }

document.write("<table width=750><tr>");

menuSet("&nbsp;", "../divers/accueil.htm", 
  menuSetLine("découvrir la SF", "../divers/definir.htm")+
  menuSetLine("découvrir le site", "../divers/decouvr.htm"));
menuSet("&nbsp;", "../biogra/index.htm", 
  menuSetLine("sa vie, son oeuvre", "../biogra/oeuvre.htm")+
  menuSetLine("ses récompenses", "../biogra/recomp.htm")+
  menuSetLine("son interview", "../biogra/inter-sw.htm")+
  menuSetLine("son magazine IASF", "../biogra/iasf.htm")+
  menuSetLine("quelques citations", "../biogra/citation.htm"));
menuSet("&nbsp;", "../biblio/index.htm", 
  menuSetLine("livres de fiction", "../biblio/biblior.htm")+
  menuSetLine("magazines et articles", "../biblio/bibliom.htm")+
  menuSetLine("sciences et divers", "../biblio/biblios.htm")+
  menuSetLine("biographies, BD, films", "../biblio/bibliob.htm")+
  menuSetLine("autres écrivains", "../biblio/biblioc.htm")+
  menuSetNull()+
  menuSetLine("liste par couverture", "../biblio/bibliocv.htm")+
  menuSetLine("liste chronologique", "../biblio/biblio39.htm")+
  menuSetLine("liste alphabétique", "../biblio/bibliol.htm"));
menuSet("&nbsp;", "../dossiers/index.htm", 
  menuSetLine("l'histoire du futur", "../themes/futur.htm")+
  menuSetLine("la galactographie", "../themes/galaxie.htm")+
  menuSetLine("la Fondation", "../themes/fondat.htm")+
  menuSetLine("les robots", "../themes/robotleg.htm")+
  menuSetLine("les Personnages", "../fiches/calvin.htm")+
  menuSetLine("les Planètes", "../fiches/aurora.htm"));
menuSet("&nbsp;", "../divers/index.htm", 
  menuSetLine("les histoires courtes", "../textes/textes.htm")+
  menuSetNull()+
  menuSetLine("la foire aux questions", "../divers/faq.htm")+
  menuSetLine("les quiz", "../divers/quizz.htm")+
  menuSetLine("les autres sites", "../divers/liens.htm")+
  menuSetNull()+
  menuSetLine("à propos du site", "../divers/infos.htm")+
  menuSetLine("le plan du site", "../divers/plan.htm")+
  menuSetLine("les anciennes versions", "../divers/sites.htm")+
  menuSetLine("copyright", "../divers/droits.htm")+
  menuSetLine("écrivez-moi !", "../divers/contacts.htm"));

document.write("<\/tr><\/table>");
