import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import Login from './pages/Login';

import * as ROUTES from './constants/routes'

import Bones from './pages/Acessorios/Bones';
import Correntes from './pages/Acessorios/Correntes';
import Mochilas from './pages/Acessorios/Mochilas';
import Relogios from './pages/Acessorios/Relogios';

import Acessorios from './pages/Infantil/Acessorios';
import Calçados from './pages/Infantil/Calçados';
import Roupas from './pages/Infantil/Roupas';
import RoupasIntimas from './pages/Infantil/RoupasIntimas';

import SobreNos from './pages/SobreNos';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={ROUTES.HOME} component={Landing} />
                    /*LOGIN */
                <Route path={ROUTES.LOGIN} component={Login} />
                    /*MASCULINO */
                <Route path={ROUTES.MR} component={Roupas} />
                <Route path={ROUTES.MC} component={Calçados} />
                <Route path={ROUTES.MA} component={Acessorios} />
                <Route path={ROUTES.MRI} component={RoupasIntimas} />
                    /*FEMININO */
                <Route path={ROUTES.FR} component={Roupas} />
                <Route path={ROUTES.FC} component={Calçados} />
                <Route path={ROUTES.FA} component={Acessorios} />
                <Route path={ROUTES.FRI} component={RoupasIntimas} />
                    /*INFANTIL */
                <Route path={ROUTES.IR} component={Roupas} />
                <Route path={ROUTES.IC} component={Calçados} />
                <Route path={ROUTES.IA} component={Acessorios} />
                <Route path={ROUTES.IRI} component={RoupasIntimas} />
                    /*ACESSORIOS */
                <Route path={ROUTES.AB} component={Bones} />
                <Route path={ROUTES.AC} component={Correntes} /> 
                <Route path={ROUTES.AM} component={Mochilas} /> 
                <Route path={ROUTES.AR} component={Relogios} /> 
                    /* SOBRE NOS */
                <Route path={ROUTES.SB} component={SobreNos} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;