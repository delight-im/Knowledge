# IT operations

 * When a mail client/server is submitting an email to be routed by a mail server, it should always use port `465` for submission with SSL/TLS or port `587` using STARTTLS.
 * Ansible, Puppet and Chef are configuration management tools which system administrators can use for IT automation. The tools allow for scripted, documented and replicatable servers. Ansible is the easiest to get started with while Chef is the hardest.
 * Email transfer is done by Mail Transfer Agents (MTAs) such as Postfix. They use the SMTP protocol.
 * Email delivery is done by Mail Delivery Agents (MDAs) such as Dovecot. They use the IMAP and POP3 protocols.
 * "Monitoring should never require a human to interpret any part of the alerting domain." (Dan Luu)
 * "[There are] [t]hree valid kinds of monitoring output: Alerts [are when a] human needs to take action *immediately*. Tickets [are when a] human needs to take action *eventually*. Logging [is when] *no* action [is] needed. Note that, for example, graphs are a type of log." (Dan Luu)
 * "[I]f a user is on a smartphone with 99% reliability, they can't tell the difference between 99.99% and 99.999% reliability [of your application]." (Dan Luu)
 * "Reliability isn't linear in cost. It can easily cost 100x more to get one additional increment of reliability." (Dan Luu)
 * Backups from a server must always be *pulled*, or, if they really need to be pushed, this needs to be done with append-only permissions. Otherwise, the server must necessarily have credentials with full write access to the backup location. If the server is compromised, that write access can be used to attack the backup repository.
