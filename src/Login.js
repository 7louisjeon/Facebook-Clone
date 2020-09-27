import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css"
import { auth, provider } from "./firebase"
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer"

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => { 
    // Sign in...
    auth.signInWithPopup(provider)
    .then((result)=> {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      })
    })
    .catch((error) => alert(error.message));
  }

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://lh3.googleusercontent.com/lGvpc6UTKDnMoIRqcu8N-oWE-hPcQkwsRFnfDuplGGyCIvVvG0hBAWswV5da4A0-EKis7ZTHgEpYtLkxr5-okLY36SQS36gmk0wdrB3G0-Ef6l0ReyTVgspQ8ETs1ssFehlWrQ-fTzuanYTn99zEF_zvr3T8YtC9kR747EpxCN4QzWbgoiNYkzVjQkJcg6WXd28BEBK_acm2ckzKTLhYSzkfmTMk3aCD1iNleuijOU2WiJyNOjJrqY_K2rW1zfjA1N1jWWtmbGfmnU4b1t-Bne8hoV7rqGC0ZBlaIVJIY2ZR9RIw5xbuBmXQ5nsvJMaDvLw6V8awzHTU7PS9KhPPE-Rs8Tw4FiUMxctCZD4UQiCArRrCJ58M0jM7FzcrfOxxJ5XN8PY-qjAsrHJlyAAlNmD30YPsQw8SVQ2ksg441s4NkHsMMVnxhD4eDiFG0sT_6NagVlgONxlq6qGpcEs-vSrpAU_ahAlFOFeZSELPFN4Kejc2tyiWXYwvSB53tWCHmLpEZ_K65xO-g2bSnwlIbSMoWeKSWcLRdTV_0eiC7O5kS2ix-yfLcnN9-DebBjsncYRd3-qnOkglIQW-G6KIv32rFucIIlLlb5W7dwZ-qou8kRoQpnzqOX3V0mlf6sWMa3nyLCWSK0BXVwe7XKqeTvY08kKmLZWrIxBKx6zxoDIvdG5SeDxJxYDdG6vf=s500-no?authuser=0'
          alt=''
        />
        <img
          src='https://lh3.googleusercontent.com/u0-tqAbNFO1qDaWaWS4HqNiBfS2YjXiIG3Z4G7G0CSRbdh5XWA33dv4Y3O26itpDnvu7dRgA3LZqShOFV0cth0-KTdTmZO4Q8LOcEB0Ve3Zqe8baGaM3n3UEpKi2EZFh-eL1qhWl5Zxq_z-wkqozKw-U2GTG4HZwXVPJ63Mcv1whMoMALfaZSAw3jDwxmweptcPdTQKk1xgIYd1hTb4j7xNWeLIRBuGjidHXxyYVNGt7zgANFa3sdZK5clgQlqlJeuOiKih9jdHFGuSGBlAfq5UAFEO_cXK5GO-mupB4J8S9-qv4IuwRxlEtk5i7j2By7-hK3UFJ9W4C0tFmLyr6oOHXIM5JeNeAH53u2dHLCFJRWg2g5sZlu8t1lAUa6w2eSVpRxor_LlXC7rB3f8uaHXHPl5ieUl_eJeEgckvu9FSoiLPmNWz1QjstvHJCAoCtwIcU8pPmyyXQcYLMI58lNAaWLKrjZUXgXSsjeLGffjcnjKf71pCQ6NROw13r-ghbwZ0J0F54AcFn84LsA8poul6iTxUKoIj7QCO4cjqoV_muyPEHLox779c1Pqjc4f0E-RDQcvfi2Qkm84duHZNMdQmHu0ITjVmKeixIQlDDU_zxSifM-8A9YlORMc4TCz7lOI_4U9b5wrCkaIYryWJu66CvUuv-Zl_-6Ki8ENMRROJ2YxeT-H_NOeRT85C0=s500-no?authuser=0'
          alt=''
          id='zoobook'
        />
      </div>
      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login
