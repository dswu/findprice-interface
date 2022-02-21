import {FC, useMemo} from "react";
import {Alert, Button, Space} from "antd";
import GithubLogo from "./assets/github.svg"
import Link from "./assets/link.svg"
import {Trans} from "@lingui/macro";
import styles from "../../styles/Github.module.scss"
import {useSearchParams} from "react-router-dom";
import {useRequest} from "ahooks";
import {UserConnectionGithub} from "../../service/user/User";

// function closeWindow(){
//     const userAgent = navigator.userAgent;
//     if (userAgent.indexOf("Firefox") !== -1 || userAgent.indexOf("Chrome") !== -1) {
//         // // window.location.href="about:blank";
//         // // window.close();
//         // window.open("about:blank", "_self");
//         // window.close();
//     } else {
//         window.opener = null;
//         window.open("", "_self");
//         window.close();
//     }
// }

const Github: FC = () => {
    const [searchParams] = useSearchParams();

    const code = useMemo(() => {
        return searchParams.get('code')
    }, [searchParams])
    const state = useMemo(() => {
        return searchParams.get('state')
    }, [searchParams])

    const { data, error, loading } = useRequest(async () => {
        if (!code || !state) return
        return await UserConnectionGithub({code, state})
    })

    const errMsg = useMemo(() => {
        if (!error) return ""
        switch ((error as any).data?.error) {
            case "expired":
                return <Trans>The validation has expired, please click `Start Here` again</Trans>
            case "discord.notfound":
                return <Trans>The Discord account does not exist</Trans>
            case "github.existed":
                return <Trans>Each user can only bind once</Trans>
            case "connected":
                return <Trans>The Github account is already in use</Trans>
            default:
                return <Trans>Your GitHub account can not be associated with FindPrice</Trans>
        }
    }, [error])

    // useEffect(() => {
    //     if (data?.success) closeWindow()
    // }, [data?.success])

    return useMemo(() => <div style={{display: "grid", placeItems: "center", width: "100%", height: "calc(100vh - 64px - 140px)"}}>
        <div style={{maxWidth: 330}}>
            <Space className={styles.buttons} size={40}>
                <div><img src="/assets/logo.png" alt="logo" style={{width: 90, height: 90}}/></div>
                <div><img src={Link} alt="link" style={{width: 45, height: 45}}/></div>
                <div><img src={GithubLogo} alt="github_logo"/></div>
            </Space>
            <div style={{width: 330, marginTop: 65, marginBottom: 80}}>
                {errMsg !== "" && <div style={{marginBottom: 10}}>
                    <Alert message={errMsg} type="error" />
                </div>}
                {data?.success && <div style={{marginBottom: 10}}>
                    <Alert message={<Trans>Your GitHub account is connected to FindPrice</Trans>} type="success" />
                </div>}
                <Button type={"primary"} size={"large"} block loading={loading}>
                    <Trans>Done</Trans>
                </Button>
            </div>
        </div>
    </div>, [data?.success, errMsg, loading])
}

export default Github;
