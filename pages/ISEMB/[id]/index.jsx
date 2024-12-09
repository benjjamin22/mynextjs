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
                    <img className={artiii.img} src={article.client}alt="picturepath"/>
                    <div className={artiii.profileinfo}>
                        <div className={artiii.profileinfoo}>
                            <h2 >{article.Aname.Name}</h2>  
                            <h3 >{article.Aname.Mname}    {article.Aname.Surname}</h3> 
                            <h1>--NIN:{article.NIN}--
                            </h1>
                        </div>
                    </div>
            </div>
                    <div className={artiii.profilebottom}>
                        <div className={artiii.school}>
                            <div className={artiii.profileinfo}> 
                                <div className={artiii.profileinfooo}>
                                    <h1>- {article.School}-</h1>
                                    
                                 </div>
                            </div>
                        </div>
                        <div className={artiii.lga}>
                        <h1>DATE OF BIRTH/PRESENT CLASS</h1>
                        
                        <div className={artiii.profileinfo}> 
                        <div className={artiii.lgacol}>
                                <h1 >- {article.Ddateofbirth.Day} {article.Ddateofbirth.Month} {article.Ddateofbirth.Year}-</h1>
                                <h3>- {article.Presentclass} -</h3>
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
                                    <h1>{article.Status}</h1>
                                    <h4 >- {article.Presentclass} -</h4>
                                </div>
                                </div>
                            </div>

                            <div className={artiii.sex}>
                                <h1 >SEX</h1>
                                <div className={artiii.profileinfo}>
                                <h1 >{article.Gender}</h1>
                                </div>
                            </div>
                        </div>
                        <div className={artiii.lga}>
                        <h1>LGA/STATE OF ORIGIN</h1>
                        
                        <div className={artiii.profileinfo}> 
                        <div className={artiii.lgacol}>
                                <h1 >- {article.State} -</h1>
                                <h3>- {article.HometownCommunity} -</h3>
                                </div>
                                 </div>
                            </div>
                        
                            <div className={artiii.bottom}>
                            <div className={artiii.contact}>
                                <h1>PARENT CONTACT 1:</h1>
                                <div className={artiii.profileinfo}>
                                    <>
                                    <div className={artiii.p1}>
                                            <p2>{article.ParentPhoneNo}</p2>
                                        </div>
                                    </>                   
                                </div>
                            </div>
                            <div className={artiii.contact}>
                                <h1>PARENT CONTACT 2:</h1>
                                <div className={artiii.profileinfo}>
                                    <>
                                    <div className={artiii.p2}>
                                            <p2>{article.ParentPhoneNo2}</p2>
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
    const res = await fetch(`https://mydata-3j6m.vercel.app/radical/${context.params.id}` )

  const article = await res.json()

  return {
    props: {
      article,
      fallback:false
    }
   
  }
}

export default article
