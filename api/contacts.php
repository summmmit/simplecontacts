<?php


$contacts = [
     [
        'name' => 'Stephen Radford',
        'phone' => '0123456789',
        'address' => '123, Some Street\nLeicester\nLE1 2AB',
        'address' => 'stephen@email.com',
        'website' => 'stephenradford.me',
        'notes' => 'Some thing here'
    ],
    [
        'name' => 'Smit Singh',
        'phone' => '4589456789',
        'address' => '123, Some Street\nLeicester\nLE1 2AB',
        'address' => 'singh@email.com',
        'website' => 'singhradford.me',
        'notes' => 'Some thing here'
    ],
    [
        'name' => 'Singh Sumit',
        'phone' => '568742135',
        'address' => '123, Some Street\nLeicester\nLE1 2AB',
        'address' => 'Sumit@email.com',
        'website' => 'Sumitenradford.me',
        'notes' => 'Shing here'
    ],
    [
        'name' => 'Sumit Radford',
        'phone' => '957456789',
        'address' => '123, Some Street\nLeicester\nLE1 2AB',
        'address' => 'Radford@email.com',
        'website' => 'Redradford.me',
        'notes' => 'Red Form thing here'
    ]
];

print_r(json_encode($contacts));

?>