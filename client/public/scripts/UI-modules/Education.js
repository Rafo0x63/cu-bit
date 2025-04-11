class Education extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="grid3 flex">
            <!--if there are more than 2 items remove .flex class-->
           <a href="/uvodURadSaSqlBazamaPodataka.aspx" class="eduBox">
                <div class="eduImg">
                    <img src="images/minify/hr-audit-resume-applicant-paper-interview-selection-human-resource-company_2000px.jpg" />
                </div>
                <div class="bottom">
                    <div class="txt">
                        <h5 class="title">SQL basic course - Working with SQL databases</h5>
                        <p class="desc">The education gives you a foundation in working with databases
                            SQL, so you can start analyzing your own databases</p>
                        <div class="eduData">
                            <p><bold>Duration:</bold> 12 hours / 2 days </p>
                            <p><bold>Prerequisite:</bold> Initial </p>
                            <p><bold>Next appointment:</bold> Coming soon!</p>
                        </div>
                    </div>
                    <div class="btn">
                        <p class="more">LEARN MORE</p>
                    </div>
                </div>
            </a>
            <a href="/radSaSQLBazama.aspx" class="eduBox">
                <div class="eduImg">
                    <img src="images/Services/it-consulting.jpg" />
                </div>
                <div class="bottom">
                    <div class="txt">
                        <h5 class="title">SQL advance course - advanced use of databases</h5>
                        <p class="desc">The training covers the advanced use of SQL server with the topics of views, indexes and triggers.</p>
                        <div class="eduData">
                            <p><bold>Duration:</bold> 18 hours / 3 days </p>
                            <p><bold>Prerequisite:</bold> Intermediate </p>
                            <p><bold>Next appointment:</bold> Coming soon!</p>
                        </div>
                    </div>
                    <div class="btn">
                        <p class="more">LEARN MORE</p>
                    </div>
                </div>
            </a>
        </div>
        `
    }
}
customElements.define("education-ui", Education)
