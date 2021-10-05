const fs = require('fs');
const folderName = '../dir1';

// Create Directory - dir1
fs.mkdir(folderName, function (err) {

    if (err) {
        console.log("Folder already exists...");
    }
    else {
        console.log("folder created...");
    }
});

// Remove Directory - dir1
fs.rmdir(folderName, function (err) {

    if (err) {
        console.log("folder does not exists...");
    }
    else {
        console.log("folder Deleted...");
    }
});

// Write File - text_file.txt
fs.writeFile("text_file.txt", "welcome to text file \nIt is text file...", function (err) {

    if (err) {
        console.log(err);
    }
    else {
        console.log("Successfully Data written in file...");
    }
});

// Read File - text_file.txt
fs.readFile("text_file.txt", "utf8", function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("**********Read text_file******************");
        console.log(data);
        console.log("******************************************");
    }
});

// Append data - text_file.txt
fs.appendFile("text_file.txt", "append text 10 20 30 40 50 60 70 80 ", function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Successfully Data append in file...");
    }
});

// Update - Replace file with new data
fs.writeFile("text_file.txt", "This is new data in file", function (err) {
    if (err) {

        console.log(err);
    }
    else {
        console.log("Successfully Replace file with new data...");
    }
});

// Rename file - text_file.txt to new_file.txt
fs.rename('text_file.txt', 'new_file.txt', function (err) {
    if (err) {
        console.log("Old file does not exists...");
    }
    console.log('Successfully file rename....');
});

// Delete File - new_file.txt
fs.unlink('new_file.txt', function (err) {
    if (err) {
        console.log('folder does not exists...');
    }
    console.log('File deleted!');
});
