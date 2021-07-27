import React, { useState } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { PageLayout } from "./components/PageLayout";
import { Options } from "./components/Options";
import { FileUploadForm } from "./components/FileUploadForm";
import { RecordUploadForm } from "./components/RecordUploadForm";
import "./styles/App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
const MainContent = () => {    
    return (
        <div className="App">
            <AuthenticatedTemplate>
                <Options/>
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <h5 className="card-title">Please sign-in to see your profile information.</h5>
            </UnauthenticatedTemplate>
        </div>
    );
};

export default function App() {
    return (
        <Router>
            <PageLayout>
                    <Switch>
                        <Route path="/" exact>
                            <MainContent />
                        </Route>
                        <Route path="/uploadfileform"><FileUploadForm/></Route>
                        <Route path="/uploadrecordform"><RecordUploadForm/></Route>
                    </Switch>
            </PageLayout>
        </Router>
        
    );
}
