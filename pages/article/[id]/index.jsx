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
                            <h2 >{article.inNamer.Name}</h2>  
                            <h3 >{article.inNamer.Mname}    {article.inNamer.Surname}</h3> 
                            <h1>--NIN:{article.reg}--
                            </h1>
                        </div>
                    </div>
            </div>
                    <div className={artiii.profilebottom}>
                        <div className={artiii.school}>
                            <div className={artiii.profileinfo}> 
                                <div className={artiii.profileinfooo}>
                                    <h1>- EBENATOR EKWE SECONDARY-</h1>
                                    <h3>- SCHOOL, ISU IMO STATE -</h3>
                                 </div>
                            </div>
                        </div>
                        <div className={artiii.lga}>
                        <h1>DATE OF BIRTH/PRESENT CLASS</h1>
                        
                        <div className={artiii.profileinfo}> 
                        <div className={artiii.lgacol}>
                                <h1 >- 17TH JULY,2012 -</h1>
                                <h3>- J.S.S. 2 -</h3>
                                </div>
                                 </div>
                            </div>
                    </div>
                    <div className={artiii.profilebottom}>
                    <div className={artiii.flecy}>
                    <div className={artiii.bg}>
                                <h1 >B/G</h1>
                                <div className={artiii.profileinfo}>
                                <h1 >{article.bloodgroup}</h1>
                                </div>
                            </div>
                            <div className={artiii.status}>
                            <h1 >STATUS/VALIDITY</h1>
                            <div className={artiii.profileinfo}>
                            <div className={artiii.col}>
                                    <h1>STUDENT</h1>
                                    <h4 >- {article.validity} -</h4>
                                </div>
                                </div>
                            </div>

                            <div className={artiii.sex}>
                                <h1 >SEX</h1>
                                <div className={artiii.profileinfo}>
                                <h1 >{article.sex}</h1>
                                </div>
                            </div>
                        </div>
                        <div className={artiii.lga}>
                        <h1>LGA/STATE OF ORIGIN</h1>
                        
                        <div className={artiii.profileinfo}> 
                        <div className={artiii.lgacol}>
                                <h1 >- {article.state} -</h1>
                                <h3>- {article.localgovt} -</h3>
                                </div>
                                 </div>
                            </div>
                        
                            <div className={artiii.bottom}>
                            <div className={artiii.contact}>
                                <h1>PARENT CONTACT 1:</h1>
                                <div className={artiii.profileinfo}>
                                    <>
                                    <div className={artiii.p1}>
                                            <p2>{article.inparentno}</p2>
                                        </div>
                                    </>                   
                                </div>
                            </div>
                            <div className={artiii.contact}>
                                <h1>PARENT CONTACT 2:</h1>
                                <div className={artiii.profileinfo}>
                                    <>
                                    <div className={artiii.p2}>
                                            <p2>{article.inparentno2}</p2>
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
