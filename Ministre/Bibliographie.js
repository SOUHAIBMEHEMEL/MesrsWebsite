import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Styles from './style.css';
import './style.css';
import BlogCard from './BlogCard';
import TVCard from './TVCard';
import Divider from '@material-ui/core/Divider';
import Form from './Form';

const useStyles = makeStyles(theme => ({
  root: {
    width:'100%',
    flexGrow: 1,
    padding:'3%',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
  image: {
    width: 300,
    height: 300,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();
  var form_hidden= true;

  function  handleContent (index){
    var menuElement = document.getElementsByClassName('BibliographyTitle');
    var element = document.getElementsByClassName('BibliographyContent');
    for (let i = 0; i < element.length; i++){
      element[i].style.display = "none";
    }
    element[index].style.display = "block";
    element[index].style.padding="30px 0 40px 0";
    }

    function  handleFormulaire (){
        var page1 = document.getElementById('page1');
        var page2 = document.getElementById('page2');

        if(form_hidden){
            page1.style.display='none';
            page2.style.display='block';
            form_hidden=false;
        }else{
            page1.style.display='block';
            page2.style.display='none';
            form_hidden=true;
        }
        
    }
    

  return (
    <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} container>
            <Grid item xs container>
                <Grid item xs={12} sm={12} md={12} style={{paddingBottom:'20px'}}>
                    <div style={{width:'100%'}}>
                        <button onClick={event => handleFormulaire()} id='btn'> Ecrire au ministre</button>
                    </div>
                </Grid>
            <Grid id='page1' item xs style={{backgroundColor:'#fff'}} >
                <Grid item xs={12} sm={12} md={12} style={{paddingRight:'20px'}}>
                    <div style={{width:'100%'}}>
                        <h3 className={'h3'} style={{width:'100%', textAlign:'center',paddingBottom:'20px'}}> Bibliographie</h3>
                    </div>
                </Grid>
                <Typography button  className={'BibliographyTitle'} onClick={event => handleContent(0)} style={{fontSize:'24px'}}>
                    Pr. Chems Eddine CHITOUR
                </Typography>
                <Grid className={'BibliographyContent'} gutterBottom style={{display:'none'}}>
                    <Grid item xs={12} style={{display:'flex'}}>
                        <Grid item xs={12} sm={8} md={8} style={{paddingRight:'20px'}}>
                            <Typography className={'li'}>
                                Chems Eddine Chitour est professeur de thermodynamique et d’économie de l’énergie à l’École Nationale Polytechnique d'Alger. Il est titulaire d'un ingéniorat en génie chimique de l'École Nationale Polytechnique d'Alger et d’un ingéniorat de raffinage du pétrole (IAP Algérie et IFP France). Il a soutenu deux thèses. D’abord, un Doctorat Ingénieur a l’Université d’Alger et un Doctorat ès-Sciences de l’Université Jean Monnet (France). Il est l’auteur d’une cinquantaine de publications scientifiques dans des revues à impact factor et de plusieurs centaines de communications scientifiques. Il a publié huit ouvrages didactiques sur la physico-chimie des surfaces, le raffinage du pétrole. ..Lire Plus
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} style={{paddingLeft:'20px'}}>
                            <img className={classes.img} alt="complex" src="/professeur-chem-eddine-chitour.jpg" />
                        </Grid>
                    </Grid>
                </Grid>

                <Typography button  className={'BibliographyTitle'} onClick={event => handleContent(1)} style={{fontSize:'24px'}}>
                    Ouvrages scientifiques
                </Typography>
                <Grid className={'BibliographyContent'} gutterBottom style={{display:'none'}}>
                    <Typography className={'li'}>
                        - L’énergie : les enjeux de l’an 2000, en 2 tomes. OPU 1992,
                    </Typography>
                    <Typography className={'li'}>
                        - La Politique et le nouvel ordre pétrolier international, Dahlab, 1995,
                    </Typography>
                    <Typography className={'li'}>
                        - Mondialisation : l'espérance ou le chaos, Anep, 2002,
                    </Typography>
                    <Typography className={'li'}>
                        - Le droit de la force après le 11 septembre 2001, édité en 2003,
                    </Typography>
                    <Typography className={'li'}>
                        - Demain quelles énergies? les changements climatiques, Enag 2008,
                    </Typography>
                    <Typography className={'li'}>
                        - Le développement durable ce que devrait faire l’Algérie, OPU 2019.
                    </Typography>
                    <Typography className={'li'}>
                    Par ailleurs, soucieux d’être un acteur de son temps, il écrit dans plusieurs journaux. Il a aussi écrit plusieurs essais sur l’histoire de l’Algérie, l’éducation et la culture, la mondialisation, les défis de l’Islam et l'immigration.
                    </Typography>
                </Grid>

                <Typography button  className={'BibliographyTitle'} onClick={event => handleContent(2)} style={{fontSize:'24px'}}>
                    Carrière universitaire
                </Typography>
                <Grid className={'BibliographyContent'} gutterBottom style={{display:'none'}}>
                    <Typography className={'li'}>
                        - Assistant, maitre-assistant, maitre de conférences, en 1976 et professeur en 1979, 
                    </Typography>
                    <Typography className={'li'}>
                        - Professeur émérite à l’école d’Ingénieurs de Génie Chimique de Toulouse,
                    </Typography>
                    <Typography className={'li'}>
                        - Professeur associé à l'IGC puis à l'ENSIACET à Toulouse.
                    </Typography>
                </Grid>

                <Typography button  className={'BibliographyTitle'} onClick={event => handleContent(3)} style={{fontSize:'24px'}}>
                    Carriere adminstrative
                </Typography>
                <Grid className={'BibliographyContent'} gutterBottom style={{display:'none'}}>
                    <Typography className={'li'}>
                        - Chef de département : Ecole Nationale Polytechnique
                    </Typography>
                    <Typography className={'li'}>
                        - Directeur du centre universitaire de Sétif
                    </Typography>
                    <Typography className={'li'}>
                        - Directeur de l’Ecole Nationale Polytechnique
                    </Typography>
                    <Typography className={'li'}>
                        - Secrétaire Générale du Ministère de l’Enseignement Supérieur et de la Recherche Scientifique
                    </Typography>
                    <Typography className={'li'}>
                        - Conseiller du chef du gouvernement pour le système éducatif et la recherche
                    </Typography>
                </Grid>

                <Typography button  className={'BibliographyTitle'} onClick={event => handleContent(4)} style={{fontSize:'24px'}}>
                    Ouvrages à caractère culturel
                </Typography>
                <Grid className={'BibliographyContent'} gutterBottom style={{display:'none'}}>
                    <Typography className={'li'}>
                        - Algérie: le passé revisité : une brève histoire de l'Algérie, Casbah Éditions, 2004.
                    </Typography>
                    <Typography className={'li'}>
                        - L'Islam et l'Occident chrétien : pour une quête de la tolérance, Casbah Éditions, 2001. Histoire religieuse de l'Algérie : l'identité et la religion face à la modernité, ENAG Éditions, 2001.
                    </Typography>
                    <Typography className={'li'}>
                        - Histoire religieuse de l'Algérie : l'identité et la religion face à la modernité, ENAG Éditions, 2001.
                    </Typography>
                    <Typography className={'li'}>
                        - L'éducation et la culture de l'Algérie : des origines à nos jours, ENAG Éditions, 1999.
                    </Typography>
                    <Typography className={'li'}>
                        - Le Monde comme je le vois. Casbah Editions 2012.
                    </Typography>
                </Grid>


                <Grid item xs={12} sm={12} md={12} style={{paddingRight:'20px', marginTop:'40px'}}>
                    <div style={{width:'100%'}}>
                        <h3 className={'h3'} style={{width:'100%', textAlign:'center',paddingBottom:'20px'}}> Les attributions</h3>
                    </div>
                </Grid>
                <Typography className={'li'} style={{paddingBottom:'10px'}}>
                    Dans le domaine de l'enseignement supérieur 
                </Typography>
                <Typography className={'li'} style={{paddingBottom:'10px'}}>
                    Dans le cadre de la politique générale du Gouvernement et de son programme d'action approuvé conformément aux dispositions de la Constitution, le ministre de l'enseignement supérieur et de la recherche scientifique propose les éléments de politique nationale dans le domaine de l'enseignement supérieur et en assure la mise en œuvre conformément aux lois et règlements en vigueur.
                </Typography>
                <Typography className={'li'} style={{paddingBottom:'10px'}}>
                    Il rend compte des résultats de sont activité au Chef du Gouvernement, au Conseil du Gouvernement et au Conseil des ministres selon les formes, modalités et échéances établies.
                </Typography>
                <Typography className={'li'} style={{paddingBottom:'10px'}}>
                    Il rend compte des résultats de sont activité au Chef du Gouvernement, au Conseil du Gouvernement et au Conseil des ministres selon les formes, modalités et échéances établies. Dans le cadre des lois et règlements en vigueur et dans la limite de ses attributions, le ministre de l'enseignement supérieur et de la recherche scientifique est chargé d'étudier et de proposer les mesures nécessaires d'organisation et de développement des différents niveaux d'enseignement supérieur, en vue de la mise en place d'un système global et intégré.
                </Typography>

                <Grid item xs={12} sm={12} md={12} style={{paddingRight:'20px', marginTop:'40px'}}>
                    <div style={{width:'100%'}}>
                        <h3 className={'h3'} style={{width:'100%', textAlign:'center',paddingBottom:'20px'}}> Blog</h3>
                    </div>
                </Grid>
                <Grid  id='BlogContainer' item xs={12} sm={12} md={12} container spacing={2}>
                    <Grid item xs={12} sm={4} md={4} style={{marginTop:'10px'}}>
                        <BlogCard></BlogCard>
                        <Typography className={'BlogTitle'} gutterBottom variant="h5" component="h2" align='center' style={{fontSize:'22px'}}>
                            Lettre a la communaute universitaire
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} style={{marginTop:'10px'}}>
                        <BlogCard></BlogCard>
                        <Typography className={'BlogTitle'} gutterBottom variant="h5" component="h2" align='center' style={{fontSize:'22px'}}>
                            La journee nationale de l'etudiant
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} style={{marginTop:'10px'}}>
                        <BlogCard></BlogCard>
                        <Typography className={'BlogTitle'} gutterBottom variant="h5" component="h2" align='center' style={{fontSize:'22px'}}>
                            16 avril, Yaoum el ilm.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12} style={{paddingRight:'20px', marginTop:'70px'}}>
                    <div style={{width:'100%'}}>
                        <h3 className={'h3'} style={{width:'100%', textAlign:'center',paddingBottom:'0'}}> Web TV</h3>
                    </div>
                </Grid>
                <Grid  id='BlogContainer' item xs={12} sm={12} md={12} container spacing={2}>
                    <Grid item xs={12} sm={4} md={4} style={{marginTop:'10px'}}>
                        <TVCard></TVCard>
                        <Typography className={'BlogTitle'} gutterBottom variant="h5" component="h2" align='center' style={{fontSize:'22px'}}>
                            Mr. Chitour rencontre une delegation.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} style={{marginTop:'10px'}}>
                        <TVCard></TVCard>
                        <Typography className={'BlogTitle'} gutterBottom variant="h5" component="h2" align='center' style={{fontSize:'22px'}}>
                            16 avril, Yaoum el ilm.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} style={{marginTop:'10px'}}>
                        <TVCard></TVCard>
                        <Typography className={'BlogTitle'} gutterBottom variant="h5" component="h2" align='center' style={{fontSize:'22px'}}>
                            Conference du 13 avril 2020.
                        </Typography>
                    </Grid>
                </Grid>

                <Divider style={{width:'100%',backgroundColor:'#eee', marginBottom:'20px', height:'2px'}} />
        
                <Grid className={'li'} gutterBottom style={{marginTop:'80px'}}>
                    <Grid item xs={12} style={{display:'flex'}}>
                        <Grid item xs={12} sm={8} md={8} style={{paddingRight:'20px'}}>
                            <Typography className={'li'}>
                                © M.E.S.R.S                          
                            </Typography>
                            <Typography className={'li'}>
                                11 chemin Doudou Mokhtar Ben Aknoun Alger - Algerie                         
                            </Typography>
                            <Typography className={'li'}>
                                Tel: +213 (0) 23-23-80-23                          
                            </Typography>
                            <Typography className={'li'}>
                                Fax: +213 (0) 23-23-80-14                          
                            </Typography>
                            <Typography className={'li'}>
                                webmaster@mesrs.dz                          
                            </Typography>
                            <Typography className={'li'} style={{color:'#3B739C',paddingTop:'15px'}}>
                                Journées de Réception                          
                            </Typography>
                            <Typography className={'li'}>
                                Lundi de 09H00 à 15H30 / Jeudi de 09H00 à 12H00                           
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} style={{paddingLeft:'20px'}}>
                            <img className={classes.img} alt="complex" src="/Drapeau.jpg" />
                        </Grid>
                    </Grid>
                </Grid>
                
              </Grid>

              <Grid id='page2' style={{display:'none'}}>
                <Form></Form>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
    </div>
  );
}
