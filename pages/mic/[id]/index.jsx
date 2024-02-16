import artiii from '../../../styles/Article.module.css';
import Link from 'next/link';
import Image from 'next/image';



const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
    <div className={artiii.body}>
      <div className={artiii.userprofile}>
            <div className={artiii.profiletop}>
                <Image src={bk1.jpg}/>
                    <img className={artiii.img} src={article.picturepath}alt="picturepath"/>
                    <div className={artiii.profileinfo}>
                        <div className={artiii.profileinfoo}>
                            <h2 >{article.Name}  {article.Mname}  {article.Surname}</h2>  
                            <h1>--NIN:{article.RegNo}--</h1>
                        </div>
                    </div>
                
            </div>
                <div className={artiii.profilebottom}>
                <div className={artiii.school}> 
                <div className={artiii.profileinfo}> 
                <div className={artiii.profileinfooo}>
                                <h1>- NATIONAL ASSOCIATION OF -</h1>
                                 <h3>- MICRIOBIOLOGY STUDENTS -</h3>
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
                                    <h1>{article.Status}</h1>
                                    <h4 >- {article.validity} -</h4>
                                </div>
                                </div>
                            </div>

                            <div className={artiii.sex}>
                                <h1 >SEX</h1>
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
                                <h3>- {article.LocalGovernment} -</h3>
                                </div>
                                 </div>
                            </div>
                        
                            <div className={artiii.bottom}>
                            <div className={artiii.contact}>
                                <h1>CONTACT:</h1>
                                <div className={artiii.profileinfo}>
                                    <>
                                    <div className={artiii.p1}>
                                            <p2>{article.Phoneno1}</p2>
                                        </div>
                                    </>                   
                                </div>
                            </div>
                            <div className={artiii.contact}>
                                <h1>EMERGENCY CONTACT:</h1>
                                <div className={artiii.profileinfo}>
                                    <>
                                    <div className={artiii.p2}>
                                            <p2>{article.Phoneno2}</p2>
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
    try {
  const res = await fetch(`https://erin-inquisitive-hare.cyclic.cloud/api/products/${context.params.id}` )

  const article = await res.json()
  if (!article) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Detail Not Found' }))
        } else {

  return {
    props: {
      article,
      fallback:false
    }
   
  }}
}
catch (error) {
        console.log(error)
    }
}

export default article