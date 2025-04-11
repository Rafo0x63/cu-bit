var jobModule = {};
let selectedJobID;
let url = window.location.href;

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

function unescapeHtml(unsafe) {
    return unsafe
        .replaceAll("&amp;", "&")
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">")
        .replaceAll("&quot;", '"')
        .replaceAll("&#039;", "'");
}

if (url.indexOf("create") > -1) {
    $("#saveJob").on("click", function (e) {
        var jobTitle = $("#jobTitle").val();
        var jobDescription = tinyMCE.activeEditor.getContent();
        $.ajax({
            type: "POST",
            url: "Services/CreateNewJob.asmx/SaveJob",
            dataType: "json",
            data: { jobTitle: jobTitle, jobDescription: escapeHtml(jobDescription) },
            success: function (response) {
                alert("job has been added successfully.");
                console.log(response);
            },
            error: function (jqXHR, textStatus, errorThrown) { console.log(jqXHR.responseText, +" " + textStatus, +" " + errorThrown) }
        });
        alert("Job is saved");
        location.reload();
    })
}



if (url.indexOf("edit") > -1) {
    $.ajax({
        type: "GET",
        url: "Services/CreateNewJob.asmx/getJobs",
        dataType: "json",
        success: function (response) {
            console.log(response);
            jobModule = response;
            $.each(response, function (i, item) {
                $("#jobTitle").append($('<option/>')
                    .val(item.ID)
                    .text(item.Title)
                );
            })

            setTimeout(function () {
                if (jobModule.length > 0) {
                    let unescapeJobDescription = unescapeHtml(jobModule[0].JobDescription);
                    tinymce.activeEditor.setContent(unescapeJobDescription);
                    console.log(selectedJobID = jobModule[0].ID);
                    selectedJobID = jobModule[0].ID;
                    $("#hideJobStatus").val(jobModule[0].HideJobStatus);
                    $("#deleteJob").show();
                }
            }, 500);

        }
    });

    $("#jobTitle").change(function () {
        selectedJobID = $(this).val();
        console.log("Selected Job ID:", selectedJobID);

        if (Array.isArray(jobModule)) {  
            selectedJob = jobModule.find(job => job.ID === selectedJobID);

            if (selectedJob) {
                let unescapeJobDescription = unescapeHtml(selectedJob.JobDescription);
                tinymce.activeEditor.setContent(unescapeJobDescription);
                $("#hideJobStatus").val(selectedJob.HideJobStatus);
            }
        } else {
            console.error('jobModule is not an array:', jobModule);
        }
    });
    $("#jobTitle").trigger('change');


    $("#deleteJob").on("click", function (e) {
        $.ajax({
            type: "GET",
            url: "Services/CreateNewJob.asmx/deleteJob?jobId=" + selectedJobID,
            dataType: "json",
            success: function (response) {
                alert("job has been deleted successfully.");
                console.log(response);
                location.reload();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.responseText.indexOf("deleted") > -1) {
                    alert("Deleted");
                    location.reload();
                }
            }
        });
    });

    $("#updateJob").on("click", function (e) {
        var jobTitle = $("#jobTitle option:selected").text();
        var jobDescription = tinyMCE.activeEditor.getContent();
        var hideJobStatus = $("#hideJobStatus").val();

        $.ajax({
            type: "POST",
            url: "Services/CreateNewJob.asmx/updateJob",
            dataType: "json",
            data: { jobId: selectedJobID, jobTitle: jobTitle, jobDescription: escapeHtml(jobDescription), hideJobStatus: hideJobStatus },
            success: function (response) {
                alert("job has been added successfully.");
                console.log(response);
                location.reload();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.responseText.indexOf("updated") > -1) {
                    alert("Updated");
                    location.reload();
                }
            }
        });

    })
}