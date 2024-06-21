import artiii from '../../../styles/Article.module.css'
import Link from 'next/link'


const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
    <div className={artiii.body}>
        <div className={artiii.userprofile}>
            <div className={artiii.profiletop}>
<<<<<<< HEAD
                    <img className={artiii.img} src={article.po}alt="picturepath"/>
                    <div className={artiii.profileinfo}>
                        <div className={artiii.profileinfoo}>
                            <h2 >{article.Aname.Name}</h2>  
                            <h3 >{article.Aname.Mname}    {article.Aname.Surname}</h3>
                            <h1>--REG:{article.RegNo}--
=======
                    <img className={artiii.img} src={article.picturepath}alt="picturepath"/>
                    <div className={artiii.profileinfo}>
                        <div className={artiii.profileinfoo}>
                            <h2 >{article.inNamer.Name}</h2>  
                            <h3 >{article.inNamer.Mname}    {article.inNamer.Surname}</h3>
                            <h1>--REG:{article.reg}--
>>>>>>> 184085085fb28f393264c04cab1a04ceb346c1c1
                            </h1>
                        </div>
                    </div>
            </div>
                    <div className={artiii.profilebottom}>
                        <div className={artiii.school}>
                            <div className={artiii.profileinfo}> 
                                <div className={artiii.profileinfooo}>
                                    <h1>- STUDENT UNION GOVERNMENT-</h1>
                                    <h3>- FEDERAL UNIVERSITY OF TECNOLOGY OWERRI-</h3>
                                 </div>
                            </div>
                        </div>
                         <div className={artiii.lga}>
                        <h1>FACULTY/DEPARTMENT</h1>
                        
                        <   div className={artiii.profileinfo}> 
                                <div className={artiii.lgacol}>
                                    <h1 >- {article.Faculty} -</h1>
<<<<<<< HEAD
                                    <h3>- {article.Dept} -</h3>
=======
                                    <h3>- {article.Department} -</h3>
>>>>>>> 184085085fb28f393264c04cab1a04ceb346c1c1
                                </div>
                                 </div>
                            </div>
                    </div>
                    
                    <div className={artiii.profilebottom}>
                    <div className={artiii.flecy}>
                    <div className={artiii.bg}>
                                <h1 >B/G</h1>
                                <div className={artiii.profileinfo}>
<<<<<<< HEAD
                                <h1 >{article.Bloodgroup}</h1>
=======
                                <h1 >{article.bloodgroup}</h1>
>>>>>>> 184085085fb28f393264c04cab1a04ceb346c1c1
                                </div>
                            </div>
                            <div className={artiii.status}>
                            <h1 >STATUS/VALIDITY</h1>
                            <div className={artiii.profileinfo}>
                            <div className={artiii.col}>
                                    <h1>{article.Status}</h1>
<<<<<<< HEAD
                                    <h4 >- {article.Validity} -</h4>
=======
                                    <h4 >- {article.validity} -</h4>
>>>>>>> 184085085fb28f393264c04cab1a04ceb346c1c1
                                </div>
                                </div>
                            </div>

                            <div className={artiii.sex}>
                                <h1 >SEX</h1>
                                <div className={artiii.profileinfo}>
<<<<<<< HEAD
                                <h1 >{article.Sex}</h1>
=======
                                <h1 >{article.sex}</h1>
>>>>>>> 184085085fb28f393264c04cab1a04ceb346c1c1
                                </div>
                            </div>
                        </div>
                        <div className={artiii.lga}>
                        <h1>LGA/STATE OF ORIGIN</h1>
                        
                        <div className={artiii.profileinfo}> 
                        <div className={artiii.lgacol}>
<<<<<<< HEAD
                                <h1 >- {article.State} -</h1>
                                <h3>- {article.LocalGovt} -</h3>
=======
                                <h1 >- {article.state} -</h1>
                                <h3>- {article.localgovt} -</h3>
>>>>>>> 184085085fb28f393264c04cab1a04ceb346c1c1
                                </div>
                                 </div>
                            </div>
                        
                            <div className={artiii.bottom}>
                            <div className={artiii.contact}>
                                <h1>CONTACT:</h1>
                                <div className={artiii.profileinfo}>
                                    <>
                                    <div className={artiii.p1}>
<<<<<<< HEAD
                                            <p2>{article.PhoneNo}</p2>
=======
                                            <p2>{article.inparentno}</p2>
>>>>>>> 184085085fb28f393264c04cab1a04ceb346c1c1
                                        </div>
                                    </>                   
                                </div>
                            </div>
                            <div className={artiii.contact}>
                                <h1>EMERGENCY CONTACT:</h1>
                                <div className={artiii.profileinfo}>
                                    <>
                                    <div className={artiii.p2}>
<<<<<<< HEAD
                                            <p2>{article.EmergencyNo}</p2>
=======
                                            <p2>{article.inparentno2}</p2>
>>>>>>> 184085085fb28f393264c04cab1a04ceb346c1c1
                                        </div>
                                    </>                   
                                </div>                           
                            </div>
                        </div>
                    </div>       
                </div>
                </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://www.mydatabase.com.ng/radical/${context.params.id}` )

  const article = await res.json()

  return {
    props: {
      article,
      fallback:false
    }
   
  }
}

<<<<<<< HEAD
export default article
=======
export default article
>>>>>>> 184085085fb28f393264c04cab1a04ceb346c1c1
