<?php

namespace App\Console\Commands;

use App\Models\MenteeProfile;
use App\Models\MentorProfile;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class importCSV extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:csv {name=mentors.csv}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import mentor or mentee file into db';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $filename = $this->argument('name');
        $filepath = public_path("csv/".$filename);
        echo $filepath;
        $file = fopen($filepath,"r");

        $importData_arr = array();
        $i = 0;
        $fieldnames = [];

        while (($filedata = fgetcsv($file, 1000, ",")) !== FALSE) {
             $num = count($filedata );
             for ($c=0; $c < $num; $c++) {
                $importData_arr[$i][] = $filedata[$c];
             }
             $i++;
        }
        fclose($file);

        $fields = array_shift($importData_arr);        
        $count = count($fields);

        echo "count ".$count;


        // Insert to MySQL database
        foreach($importData_arr as $importData){
            $insertData = [];
            foreach (range(0, $count-1) as $i) {
                $insertData[$fields[$i]] = $importData[$i]; 
            }
//            var_dump($insertData);

            //MentorProfile::insertData($insertData);
            $this->insertData($insertData);
        }

    }

    public function insertData($data)
    {
        if ($this->argument('name') === "mentors.csv") {
            MentorProfile::insertData($data);
        } else {
            MenteeProfile::insertData($data);
        }        
    }
}
