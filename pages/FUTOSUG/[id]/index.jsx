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
                    <img className={artiii.img} src={article.picturepath}alt="picturepath"/>
                    <div className={artiii.profileinfo}>
                        <div className={artiii.profileinfoo}>
                            <h2 >{article.Aname.Name}</h2>  
                            <h3 >{article.Aname.Mname}    {article.Aname.Surname}</h3>
                            <h1>--REG:{article.RegNo}--
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
                                    <h3>- {article.Dept} -</h3>
                                </div>
                                 </div>
                            </div>
                    </div>
                    
                    <div className={artiii.profilebottom}>
                    <div className={artiii.flecy}>
                    <div className={artiii.bg}>
                                <h1 >B/G</h1>
                                <div className={artiii.profileinfo}>
                                <h1 >{article.Bloodgroup}</h1>
                                </div>
                            </div>
                            <div className={artiii.status}>
                            <h1 >STATUS/VALIDITY</h1>
                            <div className={artiii.profileinfo}>
                            <div className={artiii.col}>
                                    <h1>STUDENT</h1>
                                    <h4 >- 2023-2028 -</h4>
                                </div>
                                </div>
                            </div>

                            <div className={artiii.sex}>
                                <h1 >GENDER</h1>
                                <div className={artiii.profileinfo}>
                                <h1 >{article.Sex}</h1>
                                </div>
                            </div>
                        </div>
                        <div className={artiii.lga}>
                        <h1>LGA/STATE OF ORIGIN</h1>
                        
                        <div className={artiii.profileinfo}> 
                        <div className={artiii.lgacol}>
                                <h1 >- {article.State} -</h1>
                                <h3>- {article.LocalGovt} -</h3>
                                </div>
                                 </div>
                            </div>
                        
                            <div className={artiii.bottom}>
                            <div className={artiii.contact}>
                                <h1>CONTACT:</h1>
                                <div className={artiii.profileinfo}>
                                    <>
                                    <div className={artiii.p1}>
                                            <p2>{article.PhoneNo}</p2>
                                        </div>
                                    </>                   
                                </div>
                            </div>
                            <div className={artiii.contact}>
                                <h1>EMERGENCY CONTACT:</h1>
                                <div className={artiii.profileinfo}>
                                    <>
                                    <div className={artiii.p2}>
                                            <p2>{article.EmergencyNo}</p2>
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

export default article