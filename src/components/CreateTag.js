import React from "react";
import HeroSection from "./HeroSection";


export default function CreateTag(){
    
    return(
        <form>
            <div className="form-inner">
                <h1>Heyyyyyyyyyy</h1>
                <h2>Create</h2>
                {/* ERROR */}
                <div className="form-group">
                    <label htmlFor="gitRepoUrl">Git Repo URL:</label>
                    <input type="url" gitRepoUrl="gitRepoUrl" id="gitRepoUrl"/>
                </div>
                <div className="form-group">
                    <label htmlFor="tagId">Tag Id:</label>
                    <input type="text" tagId="tagId" id="tagId"/>
                </div>
                <div className="form-group">
                    <label htmlFor="commitId">Commit Id:</label>
                    <input type="text" commitId="commitId" id="commitId"/>
                </div>
                <input type="submit" value="Create"/>
            </div>
        </form>
    )
}

