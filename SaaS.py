import dropbox
dropbox_access_token= "sl.BIoWpoWh-vQ3OBjRqgT5Q2vTXh-DVhIpp_tl_Iunwvk_eWE5J1OQnVJMJZ4GtvnWV-pCjds1OH2p2f_ymgyIIklB0x1JVwdrP734ZqypzyKRdYaGgevyQHZ9iK41d01cq6WpQU-b4fo"
dropbox_path= "/lizard.txt"
computer_path=r"G:\IT - Semester 6\Cloud Computing Lab\SaaS\lizard.txt"
client = dropbox.Dropbox(dropbox_access_token)
print("[SUCCESS] dropbox account linked")
client.files_upload(open(computer_path, "rb").read(), dropbox_path)
print("[UPLOADED] {}".format(computer_path))

metadata, f = client.files_download('/lizard.txt')
out = open("lizard_download.txt", 'wb')
out.write(f.content)
out.close()
print("[SUCCESS] downloaded")

