import {ContributionGraph} from "@components/ContributionGraph";
import {useEffect, useState} from "react";
import {IContribution} from "@core/types/IContribution";
import {apiService} from "@core/services/apiService";

function App() {
    const [contributionData, setContributionData] = useState<IContribution[]>([]);

    useEffect(() => {
        apiService.getListContributions().then(value => setContributionData(value));
    }, []);

    return (
        <ContributionGraph data={contributionData}/>
    );
}

export default App;
